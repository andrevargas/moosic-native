import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import styles from './styles';

class Loading extends Component {
    constructor() {
        super();
        this.state = {
            spinValue: new Animated.Value(0)
        };
    }
    componentDidMount() {
        this.runAnimation();
    }
    runAnimation() {
        this.state.spinValue.setValue(0);
        Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 1500
        }).start(event => event.finished && this.runAnimation());
    }
    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={{ opacity: this.props.visible ? 1 : 0 }}>
                <Animated.Image
                    source={require('../../images/logo.png')}
                    style={{
                        transform: [{ rotate: spin }],
                        width: 80,
                        height: 80
                    }}
                />
            </View>
        );
    }
}

export default Loading;