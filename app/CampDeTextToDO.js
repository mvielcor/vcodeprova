import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CampDeTextToDO = ({ valorAMostrar, funcioAAplicar }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Escriu alguna cosa"
        placeholderTextColor="#CACACA"
        selectionColor="#888888"
        value={valorAMostrar}
        onChangeText={funcioAAplicar}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#FAFAFA",
    shadowOffset: { width: 2, height: 2 }
  },
  inputText: {
    height: 60,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold"
  }
});
export default CampDeTextToDO;
