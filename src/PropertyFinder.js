/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
    Text,
    NavigatorIOS,
    AppRegistry
} from 'react-native';
import Style from './Style.js';
import HelloWorld from './HelloWorld.js';
import SearchPage from './SearchPage.js';

class PropertyFinder extends Component{
    render(){
        //constructs a navigation controller setting
        //HelloWorld as the initialRoute
        return(
            <NavigatorIOS 
                style={Style.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage
                }} />
        );
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);