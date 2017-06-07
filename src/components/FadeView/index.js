import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

class FadeView extends Component {
    constructor() {
        super();
        this.state = { fadeValue: new Animated.Value(0) };
    }
    componentDidMount() {
        this.runAnimation({
            toValue: 1,
            duration: this.props.fadeInDuration
        });
    }
    componentWillUmount() {
        this.runAnimation({
            toValue: 0,
            duration: this.props.fadeOutDuration
        });
    }
    runAnimation(config) {
        Animated.timing(this.state.fadeValue, {
            ...config,
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

FadeView.defaultProps = {
    fadeInDuration: 500,
    fadeOutDuration: 500
};

FadeView.propTypes = {
    ...Animated.View.propTypes,
    fadeInDuration: PropTypes.number,
    fadeOutDuration: PropTypes.number
};

export default FadeView;
