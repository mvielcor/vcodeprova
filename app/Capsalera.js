import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Capsalera = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Llista ToDo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  textHeader: {
    textAlign: "center",
    fontSize: 72,
    fontWeight: "100",
    color: "rgba(175, 47, 47, 0.25)"
  }
});

export default Capsalera;
