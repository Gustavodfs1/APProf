import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { Dimensions } from "react-native";

import ParallaxScrollView from "react-native-parallax-scrollview";
import { PricingCard, Rating } from "react-native-elements";
import Main from "./Main";

function ProfileProf({ navigation }) {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const SCREEN_SCALE = Dimensions.get("window").scale;
  const dev = navigation.getParam("dev");
  const materiaProcurada = navigation.getParam("materiaProcurada");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#54CEDB",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={require("./assets/tutorando.png")}
        navBarTitle={dev.name}
        userName={dev.name}
        userTitle={materiaProcurada}
        userImage={dev.avatar_url}
      >
        <View
          style={{
            backgroundColor: "#f5f5f5",
            width: 340,
            marginTop: -40,
            marginLeft: 20,
            padding: 10,
            borderRadius: 45
          }}
        >
          <Rating
            type="custom"
            ratingImage={require("./assets/star.png")}
            style={{ backgroundColor: "#F5F5f5", borderRadius: 40 }}
            reviews={["Ruim", "Bom", "Ótimo", "Profissional", "Mestre"]}
            count={5}
            showRating
            imageSize={25}
            fractions={5}
            reviewSize={30}
            selectedColor="#f5F5f5"
            ratingTextColor="#666"
            ratingBackgroundColor="#f5F5f5"
          />
          <ScrollView style={{ flex: 1, backgroundColor: "#F5F5f5" }}>
            <View
              style={{
                height: 200,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.titulo}>Quem sou...</Text>
              <Text style={styles.bio}>{dev.bio}</Text>
            </View>
            <View
              style={{
                height: 200,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.titulo}>Dou aula de:</Text>
              <Text style={styles.bio}>{dev.materias}</Text>
            </View>
            <PricingCard
              borderRadius={40}
              color="#54CEDB"
              title="Hora/Aula"
              price={`R$ ${dev.precoHora}`}
              info={["Individual", "Vou até você", "Sem taxa de deslocamento"]}
              button={{ title: " Entrar em contato!", icon: "phone" }}
            />
          </ScrollView>
        </View>

        <View
          style={{
            height: 500,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 32, color: "white" }}>keep going..</Text>
        </View>
        <View
          style={{
            height: 300,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 32, color: "white" }}>keep going...</Text>
        </View>
        <View
          style={{
            height: 300,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 32, color: "white" }}>the end! :)</Text>
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    padding: 40,
    marginTop: -50,
    fontSize: 15,
    color: "#acacac",
    borderStyle: "solid",
    borderColor: "black"
  },
  titulo: {
    padding: 50,
    marginTop: -40,
    marginLeft: -180,
    fontSize: 25,
    color: "#666",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    borderColor: "transparent"
  },
  scrollView: {
    backgroundColor: "transparent"
  },
  perfil: {
    height: 750,
    resizeMode: "contain",
    width: 180,
    borderRadius: 50,
    marginTop: -510,
    marginLeft: 90
  },
  background: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    resizeMode: "cover"
  },
  content: {
    shadowColor: "#222",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#54CEDB",
    flex: 1,
    flexDirection: "column"
  },
  headerView: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatarView: {
    justifyContent: "center",
    alignItems: "center"
  },
  listView: {
    backgroundColor: "#54CEDB"
  },
  logoutText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default ProfileProf;
