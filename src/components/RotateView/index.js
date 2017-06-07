import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

class RotateView extends Component {
    constructor() {
        super();
        this.state = { rotateValue: new Animated.Value(0) };
    }
    componentDidMount() {
        if (this.props.infinite) {
            this.runAnimationInfinite();
        } else {
            this.runAnimation();
        }
    }
    runAnimation() {
        Animated.timing(this.state.rotateValue, {
            toValue: 1,
            duration: this.props.duration,
            easing: Easing.ease
        }).start();
    }
    runAnimationInfinite() {
        this.state.rotateValue.setValue(0);
        Animated.timing(this.state.rotateValue, {
            toValue: 1,
            duration: this.props.duration,
            easing: Easing.ease
        }).start(event => event.finished && this.runAnimationInfinite());
    }
    render() {
        const { props, state } = this;
        const interpolatedValue = state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', props.reverse ? '-360deg' : '360deg']
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

RotateView.defaultProps = {
    infinite: false,
    reverse: false,
    duration: 1500
};

RotateView.propTypes = {
    ...Animated.View.propTypes,
    infinite: PropTypes.bool.isRequired,
    reverse: PropTypes.bool.isRequired,
    duration: PropTypes.number
};

export default RotateView;
