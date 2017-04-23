import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { transformOrigin, rotateY } from './martixUtils';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.rotY = new Animated.Value(0);
    }

    show(_toValue, _delay) {
        Animated.timing(
            this.rotY,
            {
                toValue: _toValue,
                duration: 150,
                delay: _delay
            }).start();
    }

    hide() {

    }

    componentDidMount() {
        this.rotY.addListener(({ value }) => {
            const y = this.rotY.__getValue();

            const origin = { x: -60, y: 0, z: 0 };
            let matrix = rotateY(y);
            transformOrigin(matrix, origin);

            this.menuItem.setNativeProps({ style: { transform: [{ perspective: 800 }, { matrix: matrix }] } });
        });
    }


    render() {
        return (
            <View style={styles.boxContainer} ref={component => this.menuItem = component}>
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