import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import MatrixMath from 'react-native/Libraries/Utilities/MatrixMath';
import { RevealMenu, RevealMenuItem } from './src/index';

export default class SideRevealMenuDev extends Component {
  constructor(props) {
    super(props);

    this.onBtnRotate = this.onBtnRotate.bind(this);
  }

  onBtnRotate() {
    this.menu.toggle();
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableNativeFeedback onPress={this.onBtnRotate.bind(this)}>
          <View style={styles.btn}><Text style={{ color: 'white' }}>Rotate</Text></View>
        </TouchableNativeFeedback>

        <RevealMenu ref={component => this.menu = component}>
          <RevealMenuItem />
          <RevealMenuItem />
          <RevealMenuItem />
          <RevealMenuItem />
        </RevealMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btn: {
    padding: 20, backgroundColor: '#00ab6b', alignItems: 'center', justifyContent: 'center'
  }
});

AppRegistry.registerComponent('SideRevealMenuDev', () => SideRevealMenuDev);
