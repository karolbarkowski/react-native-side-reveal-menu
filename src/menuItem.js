import React from 'react';

import { transformOrigin, rotateY } from './martixUtils';
import { View, Text, StyleSheet, Animated, TouchableNativeFeedback } from 'react-native';

export default class MenuItem extends React.Component {
    static propTypes = {
        onPress: React.PropTypes.func
    }

    static defaultProps = {
        onPress: () => { }
    }

    constructor(props) {
        super(props);
        this.rotY = new Animated.Value(0);

        this.onLayout = this.onLayout.bind(this);
        this.onPress = this.onPress.bind(this);

        this.state = {
            isActive: false
        }
    }

    setActiveState(_isActive) {
        this.setState({
            isActive: _isActive
        });
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

    onPress() {
        //this is the handler passed from the root menu container (We need to hande item selection in there)
        this.props.onItemPress();

        //this is the actual prop that is passed frm the outside
        this.props.onPress(this);
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
            <View style={[
                styles.boxContainer,
                this.state.isActive ? styles.boxContainerActive : {},
                this.props.isLast ? styles.boxContainerLast : {},
            ]}
                ref={component => this.menuItem = component}
                onLayout={this.onLayout}>
                <TouchableNativeFeedback onPress={this.onPress}>
                    <View style={[
                        styles.box,
                        this.state.isActive ? styles.boxActive : {},
                        this.props.borderRadius && this.props.isFirst ? { borderTopRightRadius: this.props.borderRadius } : {},
                        this.props.borderRadius && this.props.isLast ? { borderBottomRightRadius: this.props.borderRadius } : {}
                    ]}>
                        {this.props.children}
                    </View>
                </TouchableNativeFeedback>
            </View>);
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        borderBottomColor: '#182844',
        borderBottomWidth: 1,
    },
    boxContainerActive: {
        borderBottomColor: '#9E3151',
    },
    boxContainerLast: {
        borderBottomWidth: 0,
    },
    box: {
        padding: 20,
        borderColor: '#393950',
        backgroundColor: '#33334C',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxActive: {
        borderColor: '#F04A7B',
        backgroundColor: '#D64A73',
    }
});