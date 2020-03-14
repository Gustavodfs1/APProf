import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function Intro({ navigation }) {
  function _handlePress() {
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>
      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      ></TextInput>
      <Button
        buttonStyle={styles.buttonn}
        color="#54CEDB"
        title="Entre    "
        icon={
          <Icon type="outline" name="arrow-right" size={15} color="white" />
        }
        onPress={_handlePress}
        iconRight
      />
      <TouchableOpacity onPress={() => navigation.navigate("FormProf", {})}>
        <Text style={{ color: "blue", marginTop: "20%" }}>
          Crie sua conta Gratis!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "60%",
    backgroundColor: "#F5F5f5"
  },

  buttonn: {
    backgroundColor: "#54CEDB",
    marginTop: 30,
    width: 150,
    borderRadius: 50
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginBottom: 15,
    marginHorizontal: 20,
    fontSize: 16
  },
  logo: {
    marginTop: -180,
    resizeMode: "contain",
    width: 130
  }
});

export default Intro;
