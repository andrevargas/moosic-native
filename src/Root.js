import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
import Main from './scenes/Main';

class Root extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }
    openDrawer() {
        this._drawer.openDrawer();
    }
    render() {
        return (
            <DrawerLayoutAndroid
                ref={ref => this._drawer = ref}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => null}>
                <ToolbarAndroid 
                    navIcon={require('./images/ic_menu_white_48dp.png')}
                    style={{ backgroundColor: '#333333', height: 56, elevation: 5 }}
                    onIconClicked={this.openDrawer}
                />
                <View style={{ flex: 1, backgroundColor: '#333333' }} />
            </DrawerLayoutAndroid>
        );
    }
}

export default Root;