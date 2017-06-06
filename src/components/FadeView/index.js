import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class FadeView extends Component {
    constructor() {
        super();
        this.state = { fadeValue: new Animated.Value(0) };
    }
    componentDidMount() {
        this.runAnimation(1);
    }
    componentWillUmount() {
        this.runAnimation(0);
    }
    runAnimation(toValue) {
        Animated.timing(this.state.fadeValue, {
            toValue,
            duration: 500,
            easing: Easing.ease
        }).start();
    }
    render() {
        const { props, state } = this;
        const styles = [props.style, {
            opacity: state.fadeValue
        }];
        return (
            <Animated.View {...props} style={styles}>
                {props.children}
            </Animated.View>
        );
    }
}

export default FadeView;
