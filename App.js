import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/redux/createStore';
import Root from './src/Root';

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
