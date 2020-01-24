import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { Input, Avatar } from "react-native-elements";

function FormProf({ navigation }) {
  return (
    <View style={styles.View}>
      <ScrollView>
        <View style={styles.backform}>
          <Input
            blurOnSubmit="true"
            type="name"
            placeholder="Nome"
            inputContainerStyle={styles.inputBio}
          ></Input>
          <Input
            type="email"
            placeholder="E-mail"
            inputContainerStyle={styles.inputBio}
          ></Input>
          <Input
            type="password"
            placeholder="Senha"
            inputContainerStyle={styles.inputBio}
          ></Input>
          <Input
            type="tel"
            placeholder="Telefone"
            inputContainerStyle={styles.inputBio}
          ></Input>
          <Avatar
            size="xlarge"
            rounded
            activeOpacity={0.7}
            style={styles.Avatar}
            source={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4E03AQFOgoziO6xKpQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=KtpnJnk3Dea_Dk_-XhNRsSC_IjYA3UsUMatAHxGMd94"
            }}
            showEditButton
          />
          <Input
            placeholder="Fale sobre você"
            inputContainerStyle={styles.inputBio}
          ></Input>
          <Input
            placeholder="Você oferece quais matérias?"
            inputContainerStyle={styles.inputBio}
          ></Input>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: "#54CEDB"
  },
  backform: {
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 1500,
    marginTop: 100,
    borderTopRightRadius: 150
  },
  inputBio: {
    width: 300,
    marginTop: 50,
    backgroundColor: "#f5f5f5"
  },
  Avatar: {
    resizeMode: "contain",
    position: "absolute",
    marginTop: -60,
    marginLeft: 220,
    marginBottom: -30,
    width: 140,
    height: 140
  }
});

export default FormProf;
