import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuItem } from './src/index';

export default class SideRevealMenuDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu1Opened: true,
      menu2Opened: true,
      menu3Opened: true,
      menu4Opened: false,
    }
  }


  render() {
    return (
      <View style={styles.main}>
        <ScrollView>

          {/*MENU 1*/}
          <View style={styles.container}>
            <Text style={styles.instructions}>
              Menu placed on top.{"\n"}
              No roundings.{"\n"}
              Default colors.
            </Text>
            <TouchableNativeFeedback onPress={() => this.setState({ menu1Opened: !this.state.menu1Opened })}>
              <View style={styles.btn}><Text style={styles.text}>Toggle Menu</Text></View>
            </TouchableNativeFeedback>

            <Menu isOpened={this.state.menu1Opened}>
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
          </View>


          {/*MENU 2*/}
          <View style={styles.container}>
            <Text style={styles.instructions}>
              Menu centered.{"\n"}
              No items separator.{"\n"}
              Border radius: 10.{"\n"}
              Default colors.
            </Text>
            <TouchableNativeFeedback onPress={() => this.setState({ menu2Opened: !this.state.menu2Opened })}>
              <View style={styles.btn}><Text style={styles.text}>Toggle Menu</Text></View>
            </TouchableNativeFeedback>

            <Menu
              isOpened={this.state.menu2Opened}
              itemsDistribution='center'
              borderRadius={10}
              showItemsSeparator={false}
            >
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
          </View>


          {/*MENU 3*/}
          <View style={styles.container}>
            <Text style={styles.instructions}>
              Menu centered.{"\n"}
              Items separated.{"\n"}
              Border radius: 10.{"\n"}
              Default colors.
            </Text>
            <TouchableNativeFeedback onPress={() => this.setState({ menu3Opened: !this.state.menu3Opened })}>
              <View style={styles.btn}><Text style={styles.text}>Toggle Menu</Text></View>
            </TouchableNativeFeedback>

            <Menu
              isOpened={this.state.menu3Opened}
              itemsDistribution='space-around'
              borderRadius={10}
            >
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
          </View>


          {/*MENU 4*/}
          <View style={styles.container}>
            <Text style={styles.instructions}>
              Hidden at start.{"\n"}
              Menu centered.{"\n"}
              Items separated.{"\n"}
              Border radius: 10.{"\n"}
              Custom colors.{"\n"}
              Custom animation timings.{"\n"}
              No active item higlight.
            </Text>
            <TouchableNativeFeedback onPress={() => this.setState({ menu4Opened: !this.state.menu4Opened })}>
              <View style={styles.btn}><Text style={styles.text}>Toggle Menu</Text></View>
            </TouchableNativeFeedback>

            <Menu
              isOpened={this.state.menu4Opened}
              itemsDistribution='space-around'
              borderRadius={10}
              inactiveItemColor='#7F0037'
              activeItemColor='#C40055'
              itemAnimDuration={100}
              itemAnimDelay={400}
              showActiveItem={false}
            >
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  container: {
    height: 350,
    marginBottom: 30,
    marginTop: 30,
    paddingRight: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },
  instructions: {
    width: 200,
    textAlign: 'right',
    marginBottom: 20
  },
  btn: {
    padding: 20, backgroundColor: '#00ab6b', alignItems: 'center', justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

AppRegistry.registerComponent('SideRevealMenuDev', () => SideRevealMenuDev);
