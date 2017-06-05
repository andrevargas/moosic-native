import React, { Component } from 'react';
import AppShell from './components/AppShell';
import Main from './scenes/Main';

class Root extends Component {
    render() {
        return (
            <AppShell>
                <Main />
            </AppShell>
        );
    }
}

export default Root;