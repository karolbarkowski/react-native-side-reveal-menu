import React from 'react';

import { transformOrigin, rotateY } from './martixUtils';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.rotY = new Animated.Value(0);
    }

    animate(_toValue, _delay) {
        Animated.timing(
            this.rotY,
            {
                toValue: _toValue,
                duration: 150,
                delay: _delay
            }).start();
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
                    {this.props.children}
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
        padding: 20,
        borderColor: '#393950',
        borderWidth: 1,
        backgroundColor: '#33334C',
        alignItems: 'center',
        justifyContent: 'center'
    }
});