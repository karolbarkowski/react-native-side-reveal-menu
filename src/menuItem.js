import React from 'react';

import { transformOrigin, rotateY } from './martixUtils';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.rotY = new Animated.Value(0);

        this.onLayout = this.onLayout.bind(this);
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

            //I'm substrating that 10% of width at the end to get rid of some distortions caused by perspective
            //so the origin of transform is not perfectly aligned with the left side of view, it's a bit outside of it 
            let xOffest = parseInt(-this.containerWidth / 2) - parseInt(0.1 * this.containerWidth);
            const origin = { x: xOffest, y: 0, z: 0 };
            let matrix = rotateY(y);
            transformOrigin(matrix, origin);

            this.menuItem.setNativeProps({ style: { transform: [{ perspective: 800 }, { matrix: matrix }] } });
        });
    }

    onLayout(e) {
        this.containerWidth = e.nativeEvent.layout.width;
    }

    render() {
        return (
            <View style={styles.boxContainer} ref={component => this.menuItem = component} onLayout={this.onLayout}>
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