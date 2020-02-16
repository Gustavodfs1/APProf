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
        <View style={styles.flex}>
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
            <Input
              placeholder="Fale sobre você"
              inputContainerStyle={styles.inputBio}
            ></Input>
            <Input
              placeholder="Você oferece quais matérias?"
              inputContainerStyle={styles.inputBio}
            ></Input>
          </View>
          <View style={styles.ViewAvatar}>
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
          </View>
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
  flex: {
    flexDirection: "row",
    flex: 1
  },
  ViewAvatar: {
    marginTop: 100,
    resizeMode: "contain",
    flex: 1
  },

  backform: {
    flex: 4,
    backgroundColor: "#f5f5f5",
    marginTop: 100,
    borderTopRightRadius: 150,
    height: "100%"
  },
  inputBio: {
    width: 200,
    marginTop: 50,
    backgroundColor: "#f5f5f5"
  },
  Avatar: {
    position: "absolute",
    left: -80,
    resizeMode: "contain",
    width: 140,
    height: 140
  }
});

export default FormProf;
