import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Icon name="rocket" text="sample icon" size={30} color="#fff" />
                    <Text style={styles.text}>Icon Text</Text>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        borderBottomColor: '#182844',
        borderBottomWidth: 1,
    },
    box: {
        width: 100,
        padding: 10,
        borderColor: '#393950',
        borderWidth: 1,
        backgroundColor: '#33334C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 8,
        color: '#fff'
    }
});