'use strict';

import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image
} from 'react-native';
import Style from './Style.js'

class SearchPage extends Component{
    render(){
        return(
            <View style={Style.searchContainer}>

                <Text style={Style.description}>
                    Search for houses to buy!
                </Text>
                <Text style={Style.description}>
                    Search by place, name, postal code, or near your location!
                </Text>

                <View style={Style.flowRight}>
                    <TextInput style={Style.searchInput} placeholder='Search via name or postal code' />
                    <TouchableHighlight style={Style.button} underlayColor='#99d9f4'>
                        <Text style={Style.buttonText}> Go </Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={Style.button} underlayColor='#99d9f4'>
                    <Text style={Style.buttonText}> Location </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default SearchPage;