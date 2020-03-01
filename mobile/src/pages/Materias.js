import React, { useState } from "react";
import { TextInput, Chip } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Button as ButtonIcon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function Materias({
  touched,
  errors,
  values,
  handleChange,
  handleBlur,
  setFieldValue
}) {
  const [materia, setMateria] = useState("");
  const [materias, setMaterias] = useState("");

  const add = React.useCallback(() => {
    if (materia !== "") {
      const arrayM = materias.split(",").filter(v => v != "");

      if (!arrayM.includes(materia)) {
        let materiaConcatenada = materias.concat(",").concat(materia);
        setMaterias(materiaConcatenada);
        setFieldValue("materias", materiaConcatenada);
        setMateria("");
      }
    }
  }, [materia, materias]);

  const remove = React.useCallback(
    texto => {
      const materiasdel = materias.replace(`,${texto}`, "").trim();
      setMaterias(materiasdel);
    },
    [materias]
  );

  return (
    <>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flexDirection: "row", flex: 6 }}>
          <View style={{ flex: 1 }}>
            <TextInput
              errorMessage={touched.name ? errors.name : null}
              label="Matéria"
              style={styles.inputBio}
              onChangeText={setMateria}
              value={materia}
            ></TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <ButtonIcon
              style={styles.ADD}
              type="clear"
              onPress={add}
              icon={<Icon name="plus" size={44} color="blue" />}
              iconRight
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingLeft: 10,
          flexWrap: true
        }}
      >
        {materias
          .split(",")
          .filter(v => v != "")
          .map((texto, i) => (
            <View key={i} style={{ marginRight: 10, marginTop: 10 }}>
              <Chip mode="outlined" onClose={() => remove(texto)}>
                {texto}
              </Chip>
            </View>
          ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  inputBio: {
    marginTop: 50,
    backgroundColor: "#f5f5f5"
  },
  ADD: {
    marginTop: 65
  }
});
export default Materias;
