import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { transformOrigin, rotateY } from './martixUtils';
import MenuItem from './menuItem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.rotY = new Animated.Value(0);
        this.state = {
            isOpened: this.props.isOpened || true
        }
    }

    componentDidMount() {
        this.rotY.addListener(({ value }) => {
            const y = this.rotY.__getValue();

            const origin = { x: -60, y: 0, z: 0 };
            let matrix = rotateY(y);
            transformOrigin(matrix, origin);

            this.menu.setNativeProps({ style: { transform: [{ perspective: 1000 }, { matrix: matrix }] } });
        });
    }

    startAnimation(_toValue) {
        Animated.timing(
            this.rotY,
            {
                toValue: _toValue,
                duration: 150
            }).start();
    }

    show() {
        this.setState({ isOpened: true });
        this.startAnimation(0);
    }

    hide() {
        this.setState({ isOpened: false });
        this.startAnimation(90);
    }

    toggle() {
        this.state.isOpened ? this.hide() : this.show();
    }

    render() {
        return (<View style={styles.menu}
            ref={component => this.menu = component}
        >
            {this.props.children}
        </View>);
    }
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});