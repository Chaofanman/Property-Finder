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
import Style from './Style.js';

class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: 'London',
            isLoading: false
        };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    onSearchTermChange(event){
        console.log('onSearchTermChange');
        this.setState({ searchString: event.nativeEvent.text });
        console.log("current searchString: ", this.state.searchString);
    }

    
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
                    <TextInput 
                        style={Style.searchInput} 
                        value={this.state.searchString} 
                        placeholder='Search via name or postal code' 
                        onChange={this.onSearchTermChange}
                        />
                    <TouchableHighlight style={Style.button} underlayColor='#99d9f4'>
                        <Text style={Style.buttonText}> Go </Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={Style.button} underlayColor='#99d9f4'>
                    <Text style={Style.buttonText}> Location </Text>
                </TouchableHighlight>

                <Image source={require('../Resources/house.png')} style={Style.image}/>
            </View>
        );
    }
}

export default SearchPage;