import React, { Component } from 'react';
import { View } from 'react-native';
import Root from './src/Root';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 25 }}>
                <Root />
            </View>
        );
    }
}

export default App;
