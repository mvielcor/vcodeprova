/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Capsalera from "./Capsalera";
import { Colors } from "react-native/Libraries/NewAppScreen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      valorIntroduit: "",
      arrayDeTasques: [],
      tipus: "Tots"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Capsalera />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  container: {
    flex: 1,
    paddingTop: 60
  },
  content: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  }
});

export default App;
