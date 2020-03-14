import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

import api from "../services/api";
import { connect, disconnect, subscribeToNewProfs } from "../services/socket";
import firebase from "firebase";
import "firebase/auth";

function Main({ navigation }) {
  const [profs, setProfs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [materias, setMaterias] = useState("");

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 1.03,
          longitudeDelta: 1.03
        });
      }
    }
    loadInitialPosition();
  }, []);
  const loginFirebase = async () => {
    try {
      await firebase.auth().signInAnonymously();
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          //setLoading(false);
          console.log(user);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    subscribeToNewProfs(prof => setProf([...profs, prof]));
    loginFirebase();
  }, [profs]);

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;
    connect(latitude, longitude, materias);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get("/search", {
      params: {
        latitude,
        longitude,
        materias
      }
    });

    setProfs(response.data);
    setupWebsocket();
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {profs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1]
            }}
          >
            <Image
              style={styles.avatar}
              source={{
                uri: dev.avatar_url
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate("ProfileProf", {
                  dev,
                  materiaProcurada: materias
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.materias}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.SearchForm}>
        <TextInput
          style={styles.SearchInput}
          placeholder="Busque profs pela matéria..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={materias}
          onChangeText={setMaterias}
        />

        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 20,
    borderColor: "#fff"
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5
  },
  SearchForm: {
    position: "absolute",
    top: 55,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row"
  },
  SearchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#ffff",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 3
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#54CEDB",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});

export default Main;
