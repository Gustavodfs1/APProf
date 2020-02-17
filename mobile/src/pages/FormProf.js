import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  Alert
} from "react-native";
import { Input, Avatar, Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const initialValues = {
  name: "",
  eMail: "",
  senha: "",
  avatar_url: "",
  materias: "",
  bio: "",
  descricao: "",
  precoHora: "",
  individual: "",
  vouatevoce: "",
  taxaDeslocamento: ""
};
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Muito curto")
    .max(40, "Muito longo")
    .required("Campo obrigatório"),
  eMail: Yup.string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),
  senha: Yup.string()
    .min(6, "Senha muito curta")
    .required("Campo obrigatório"),
  telefone: Yup.string()
    .min(9, "Muito curto")
    .max(14, "Muito longo")
    .required("Campo obrigatório"),
  materias: Yup.string()
    .min(3, "Muito curto")
    .max(50, "Muito longo"),
  bio: Yup.string()
    .min(5, "Muito curto")
    .required("Campo obrigatório"),
  descricao: Yup.string()
    .min(5, "Muito curto!")
    .required("Campo obrigatório"),
  precoHora: Yup.number().required("Campo obrigatório"),
  individual: Yup.string(),
  vouatevoce: Yup.string(),
  taxaDeslocamento: Yup.number()
});

function FormProf({ navigation }) {
  const [location, setLocation] = useState({});
  const submit = async (values, actions) => {
    try {
      const response = await api.post("/profs", { ...values, ...location });
      Alert.alert("Atenção", "Cadastro realizado com sucesso!");
      console.log(response);
    } catch (e) {
      Alert.alert("Atenção", "Houve um erro, tente novamente");
      console.log(e);
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert("Atenção", "Sem localizacao nao sera possivel");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      });
    }
  };
  useEffect(() => {
    _getLocationAsync();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={SignupSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.View}>
            <ScrollView>
              <View style={styles.flex}>
                <View style={styles.backform}>
                  <Input
                    errorMessage={touched.name ? errors.name : null}
                    placeholder="Nome"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  ></Input>
                  <Input
                    errorMessage={touched.email ? errors.email : null}
                    type="email"
                    placeholder="E-mail"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("eMail")}
                    onBlur={handleBlur("eMail")}
                    value={values.eMail}
                  ></Input>
                  <Input
                    errorMessage={touched.senha ? errors.senha : null}
                    type="password"
                    placeholder="Senha"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("senha")}
                    onBlur={handleBlur("senha")}
                    value={values.senha}
                  ></Input>
                  <Input
                    errorMessage={touched.telefone ? errors.telefone : null}
                    type="tel"
                    placeholder="Telefone"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("telefone")}
                    onBlur={handleBlur("telefone")}
                    value={values.telefone}
                  ></Input>
                  <Input
                    errorMessage={touched.bio ? errors.bio : null}
                    placeholder="Fale sobre você"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("bio")}
                    onBlur={handleBlur("bio")}
                    value={values.bio}
                  ></Input>
                  <Input
                    errorMessage={touched.descricao ? errors.descricao : null}
                    placeholder="Você oferece quais matérias?"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("descricao")}
                    onBlur={handleBlur("descricao")}
                    value={values.descricao}
                  ></Input>
                  <Input
                    errorMessage={touched.precoHora ? errors.precoHora : null}
                    placeholder="Qual o valor da sua Hora/Aula?"
                    inputContainerStyle={styles.inputBio}
                    onChangeText={handleChange("precoHora")}
                    onBlur={handleBlur("precoHora")}
                    value={values.precoHora}
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
              <Button title="Salvar" onPress={handleSubmit}></Button>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
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
