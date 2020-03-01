import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

function BioDesc({ touched, errors, values, handleChange, handleBlur }) {
  return (
    <>
      <TextInput
        errorMessage={touched.bio ? errors.bio : null}
        label="Fale sobre você"
        style={styles.inputBio}
        onChangeText={handleChange("bio")}
        onBlur={handleBlur("bio")}
        value={values.bio}
      ></TextInput>
      <TextInput
        errorMessage={touched.descricao ? errors.descricao : null}
        label="Você oferece quais matérias?"
        style={styles.inputBio}
        onChangeText={handleChange("descricao")}
        onBlur={handleBlur("descricao")}
        value={values.descricao}
      ></TextInput>
      <TextInput
        errorMessage={touched.precoHora ? errors.precoHora : null}
        label="Qual o valor da sua Hora/Aula?"
        style={styles.inputBio}
        onChangeText={handleChange("precoHora")}
        onBlur={handleBlur("precoHora")}
        value={values.precoHora}
      ></TextInput>
    </>
  );
}
const styles = StyleSheet.create({
  inputBio: {
    width: 225,
    marginTop: 50,
    backgroundColor: "#f5f5f5"
  }
});

export default BioDesc;
