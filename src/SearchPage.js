'use strict';

import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image
} from 'react-native';
import Style from './Style.js';

function urlForQueryAndPage(key, value, pageNumber){
    var data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };

    data[key] = value;

    var queryString = Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&');

    return 'http://api.nestoria.co.uk/api?' + queryString;
}


class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: 'London',
            isLoading: false,
            message: ''
        };
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
        this.onSearchPressed = this.onSearchPressed.bind(this);
    }

    onSearchTermChange(event){
        console.log('onSearchTermChange');
        this.setState({ searchString: event.nativeEvent.text });
        console.log("current searchString: ", this.state.searchString);
    }

    _executeQuery(query){
        console.log("Query: ", query);
        this.setState({ isLoading: true });
        fetch(query)
            .then((response) => response.json())
            .then((json) => this._handleResponse(json.response))
            .catch((error) => {
                console.log("ERROR: ", error);
                this.setState({
                    isLoading: false,
                    message: 'ERROR: ' + error
                })
            })
    }

    onSearchPressed(){
        var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    }

    _handleResponse(response){
        this.setState({
            isLoading: false,
            message: ''
        });
        console.log("HANDLE_RESPONSE: ", response);
        if (response.application_response_code(0, 1) === 1){
            console.log("Properties found: " + response.listings.length);
        } else {
            this.setState({ message: 'Location not recognized' });
        }
    }

    
    render(){
        var spinner = this.state.isLoading? (<ActivityIndicator size='large' />) : (<View />);

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
                    <TouchableHighlight 
                        style={Style.button} 
                        underlayColor='#99d9f4'
                        onPress={this.onSearchPressed}>
                            <Text style={Style.buttonText}> Go </Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={Style.button} underlayColor='#99d9f4'>
                    <Text style={Style.buttonText}> Location </Text>
                </TouchableHighlight>

                <Image source={require('../Resources/house.png')} style={Style.image}/>
                {spinner}

                <Text style={Style.description}>{this.state.message}</Text>
            </View>
        );
    }
}

export default SearchPage;