import React from "react";
import { Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";

const AppProfAvatar = ({ uri, setAvatar, setFieldValue }) => {
  if (!uri) {
    return (
      <Avatar
        onEditPress={() => setAvatar(setFieldValue)}
        size="xlarge"
        rounded
        activeOpacity={0.7}
        style={styles.Avatar}
        icon="view-array"
        showEditButton
      />
    );
  } else {
    return (
      <Avatar
        onEditPress={() => setAvatar(setFieldValue)}
        size="xlarge"
        rounded
        activeOpacity={0.7}
        style={styles.Avatar}
        source={{ uri }}
        showEditButton
      />
    );
  }
};
const styles = StyleSheet.create({
  Avatar: {
    position: "absolute",
    left: -80,
    resizeMode: "contain",
    width: 140,
    height: 140
  }
});
export default AppProfAvatar;
