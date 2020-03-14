import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

function InfoPrincipais({ touched, errors, values, handleChange, handleBlur }) {
  return (
    <>
      <TextInput
        mode="flat"
        errorMessage={touched.name ? errors.name : null}
        label="Nome"
        style={styles.inputBio}
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        value={values.name}
      ></TextInput>
      <TextInput
        keyboardType="email-address"
        mode="flat"
        errorMessage={touched.email ? errors.email : null}
        type="email"
        label="E-mail"
        style={styles.inputBio}
        onChangeText={handleChange("eMail")}
        onBlur={handleBlur("eMail")}
        value={values.eMail}
      ></TextInput>
      <TextInput
        secureTextEntry
        mode="flat"
        errorMessage={touched.senha ? errors.senha : null}
        type="password"
        label="Senha"
        style={styles.inputBio}
        onChangeText={handleChange("senha")}
        onBlur={handleBlur("senha")}
        value={values.senha}
      ></TextInput>
      <TextInput
        keyboardType="number-pad"
        mode="flat"
        errorMessage={touched.telefone ? errors.telefone : null}
        type="tel"
        label="Telefone"
        style={styles.inputBio}
        onChangeText={handleChange("telefone")}
        onBlur={handleBlur("telefone")}
        value={values.telefone}
      ></TextInput>
    </>
  );
}
const styles = StyleSheet.create({
  inputBio: {
    width: 200,
    marginTop: 28,
    backgroundColor: "#f5f5f5"
  },
  backform: {
    flex: 4,
    backgroundColor: "#f5f5f5",
    marginTop: 100,
    borderTopRightRadius: 150
  }
});

export default InfoPrincipais;
