import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
import styles from './styles';

class AppShell extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }
    openDrawer() {
        this._drawer.openDrawer();
    }
    render() {
        return (
            <View style={styles.appShell}>
                <DrawerLayoutAndroid
                    ref={ref => this._drawer = ref}
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => null}>
                    <ToolbarAndroid
                        title="Moosic"
                        titleColor="#ffffff"
                        navIcon={require('../../../assets/images/ic_menu_white_48dp.png')}
                        style={styles.toolbar}
                        onIconClicked={this.openDrawer}
                    />
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </DrawerLayoutAndroid>
            </View>
        );
    }
}

export default AppShell;