import React, { Component } from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import createStore from './src/redux/createStore';
import Root from './src/Root';

const store = createStore();

class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            'Fugaz One': require('./assets/fonts/FugazOne-Regular.ttf'),
            'Lato': require('./assets/fonts/Lato-Regular.ttf')
        });
    }
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
