import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuItem } from './src/index';

export default class SideRevealMenuDev extends Component {
  ///TODO:
  // - menu sterowane przez props a nie this.menu.toggle
  // - guzior do zamykania menu (jako pierwszy lub ostatni)
  // - wysokość itemów - auto albo jak w flexbox
  // - animacja - duration, easing, delay

  render() {
    return (
      <View style={styles.container}>

        <TouchableNativeFeedback onPress={() => this.menu.toggle()}>
          <View style={styles.btn}><Text style={{ color: 'white' }}>Toggle Menu</Text></View>
        </TouchableNativeFeedback>

        <Menu ref={component => this.menu = component}
          isOpened={true}
          showCloseButton={true}
          itemsDistribution={'auto'}
        >
          <MenuItem onPress={() => console.log('Adress book pressed')}>
            <Icon name="address-book" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Calendar pressed')}>
            <Icon name="calendar" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Envelope pressed')}>
            <Icon name="envelope" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('Info pressed')}>
            <Icon name="info" size={25} color="#fff" />
          </MenuItem>
          <MenuItem onPress={() => console.log('User pressed')}>
            <Icon name="user" size={25} color="#fff" />
          </MenuItem>
        </Menu>
      </View >
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
