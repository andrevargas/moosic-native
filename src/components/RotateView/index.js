import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class RotateView extends Component {
    constructor() {
        super();
        this.state = { rotateValue: new Animated.Value(0) }
    }
    componentDidMount() {
        this.runAnimation();
    }
    runAnimation() {
        this.state.rotateValue.setValue(0);
        Animated.timing(this.state.rotateValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.ease
        }).start(event => event.finished && this.runAnimation());
    }
    render() {
        const { props, state } = this;
        const interpolatedValue = state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        const styles = [props.style, {
            transform: [{ rotate: interpolatedValue }]
        }];
        return (
            <Animated.View {...props} style={styles}>
                {props.children}
            </Animated.View>
        );
    }
}

export default RotateView;