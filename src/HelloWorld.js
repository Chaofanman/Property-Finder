'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';
import Style from './Style.js'

class HelloWorld extends Component{
    render(){
        return(
            <Text style={Style.text}> Hello Sexy! </Text>
        );
    }
}

export default HelloWorld;