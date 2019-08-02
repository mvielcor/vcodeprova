/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
// Els components que creem nosaltres no van entre {}
import Capsalera from './Capsalera';
import CampDeTextToDO from './CampDeTextToDO';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      valorIntroduit: '', //valor que ha introduit l'usuari en el camp de text ToDO
      arrayDeTasques: [], //Llistat de tasques ToDO
      tipus: 'Tots',
    };
  }

  // Creem un mètode que s'executarà quan l'usuari escriga en el camp de text
  novaTascaAAfegir(unValorIntroduit) {
    console.log('Vaig a afegir: ', unValorIntroduit); //Mostrem en el log el que valor introduit a cada moment
    this.setState({ valorIntroduit: unValorIntroduit });
  }

  render() {
    const { elValorQueTenim } = this.state.valorIntroduit;
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Capsalera />
          <CampDeTextToDO
            valorIntroduit={elValorQueTenim}
            funcioAAplicar={text => this.novaTascaAAfegir(text)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;
