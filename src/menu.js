import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { shadeColor } from './colorUtils';
import MenuItem from './menuItem';

export default class Menu extends React.Component {
    static propTypes = {
        onShow: React.PropTypes.func,
        onHide: React.PropTypes.func,
        borderRadius: React.PropTypes.number,
        hideOnPress: React.PropTypes.bool,
        showActiveItem: React.PropTypes.bool,
        showItemsSeparator: React.PropTypes.bool,
        inactiveItemColor: React.PropTypes.string,
        activeItemColor: React.PropTypes.string,
    }

    static defaultProps = {
        onShow: () => { },
        onHide: () => { },
        borderRadius: null,
        hideOnPress: false,
        showActiveItem: true,
        showItemsSeparator: true,
        inactiveItemColor: '#33334C',
        activeItemColor: '#D64A73',
    }

    constructor(props) {
        super(props);

        this.props.inactiveItemColorLight = shadeColor(this.props.inactiveItemColor, 5);
        this.props.inactiveItemColorDark = shadeColor(this.props.inactiveItemColor, -10);

        this.props.activeItemColorLight = shadeColor(this.props.activeItemColor, 5);
        this.props.activeItemColorDark = shadeColor(this.props.activeItemColor, -10);

        this.state = {
            activeItemIndex: null,
            isOpened: this.props.isOpened || true
        }
    }

    startAnimation(_toValue) {
        let _self = this;

        this.children.forEach(function (child, index) {
            this.refs[child.ref].animate(_toValue, index * 50);
        }, this);
    }

    show() {
        this.setState({ isOpened: true });
        this.startAnimation(0);
        this.props.onShow();
    }

    hide() {
        this.setState({ isOpened: false });
        this.startAnimation(90);
        this.props.onHide();
    }

    toggle() {
        this.state.isOpened ? this.hide() : this.show();
    }

    onItemPress(pressedChildRef) {
        this.children.forEach(function (child, index) {
            this.setState({
                activeItemIndex: index
            });

            //higlight active item and unhiglight all other items
            if (this.props.showActiveItem) {
                this.refs[child.ref].setActiveState(child.ref === pressedChildRef);
            }
        }, this);

        if (this.props.hideOnPress) {
            this.hide();
        }
    }

    render() {
        //child elements are created dynamically so we need to clone them and add ref and key props so we can reference them later on
        this.children = this.props.children.map((child, index) => {
            return React.cloneElement(child, {
                ref: 'item' + index,
                key: 'item' + index,
                isFirst: index == 0,
                isLast: index == this.props.children.length - 1,
                onItemPress: child => this.onItemPress('item' + index),

                borderRadius: this.props.borderRadius,
                showItemsSeparator: this.props.showItemsSeparator,
                activeItemColor: this.props.activeItemColor,
                inactiveItemColor: this.props.inactiveItemColor,
                inactiveItemColorLight: this.props.inactiveItemColorLight,
                inactiveItemColorDark: this.props.inactiveItemColorDark,
                activeItemColorLight: this.props.activeItemColorLight,
                activeItemColorDark: this.props.activeItemColorDark,
            });
        });
        return (<View style={styles.menu} ref={component => this.menu = component}>
            {this.children}
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