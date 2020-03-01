import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import * as Yup from "yup";
import api from "../services/api";
import BioDesc from "./BioDesc";
import InfoPrincipais from "./InfoPrincipais";
import Materias from "./Materias";
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import AppProfAvatar from "../components/appProfAvatar";

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
  avatar_url: Yup.string().required("A foto de perfil é obrigatória"),
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
  const [passo, setPasso] = useState(0);
  const [imageUri, setImageUri] = useState("");

  const submit = async (values, actions) => {
    try {
      const responseFile = await fetch(values.avatar_url);
      const blob = await responseFile.blob();
      firebase
        .storage()
        .ref()
        .child("fotos_Perfil")
        .put(blob)
        .then(response => {
          response.ref.getDownloadURL().then(async url => {
            const response = await api.post("/profs", {
              ...values,
              ...location,
              avatar_url: url
            });
            Alert.alert("Atenção", "Cadastro realizado com sucesso!");
            console.log(response);
          });
        });
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
  loginFirebase = async () => {
    await firebase.auth().signInAnonymously();
  };
  avatarup = async () => {
    let { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Atenção", "A foto de perfil é obrigatória");
      status = await ImagePicker.requestCameraRollPermissionsAsync();
    }
  };
  const setAvatar = async setFieldValue => {
    const image = await ImagePicker.launchImageLibraryAsync();
    setImageUri(image.uri);
    setFieldValue("avatar_url", image.uri);
  };
  useEffect(() => {
    loginFirebase();
    avatarup();
    _getLocationAsync();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      //validationSchema={SignupSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
      }) => (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.View}>
            <View style={styles.flex}>
              <View style={styles.backform}>
                <View style={{ flex: 4 }}>
                  {passo === 0 && (
                    <InfoPrincipais
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  )}
                  {passo === 1 && (
                    <BioDesc
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  )}
                  {passo === 2 && (
                    <Materias
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      touched={touched}
                      setFieldValue={setFieldValue}
                    />
                  )}
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end"
                  }}
                >
                  {passo === 2 && (
                    <Button
                      style={styles.Proximo}
                      buttonStyle={{ backgroundColor: "green" }}
                      title="Salvar"
                      onPress={handleSubmit}
                    ></Button>
                  )}
                  {passo < 2 && (
                    <Button
                      style={styles.Proximo}
                      title="Proximo"
                      onPress={() => {
                        setPasso(p => p + 1);
                      }}
                    ></Button>
                  )}
                  {passo > 0 && (
                    <Button
                      style={styles.Voltar}
                      title="Voltar"
                      onPress={() => {
                        setPasso(p => p - 1);
                      }}
                    ></Button>
                  )}
                </View>
              </View>
              <View style={styles.ViewAvatar}>
                {passo == 0 && (
                  <AppProfAvatar
                    uri={imageUri}
                    setAvatar={setAvatar}
                    setFieldValue={setFieldValue}
                  />
                )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  Voltar: {
    borderRadius: 200,
    marginTop: -40,
    marginLeft: 10,
    width: "35%"
  },
  Proximo: {
    borderRadius: 200,
    width: "35%",
    alignSelf: "flex-end",
    marginRight: 10
  },
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
    borderTopRightRadius: 150
  },
  inputBio: {
    width: 200,
    marginTop: 50,
    backgroundColor: "#f5f5f5"
  }
});

export default FormProf;
