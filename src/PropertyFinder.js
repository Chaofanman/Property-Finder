/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';
import Style from './Style.js'

class PropertyFinder extends Component{
    render(){
        return(
            <Text style={Style.text}> Hello World! </Text>
        );
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);