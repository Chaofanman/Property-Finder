'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';
import Style from './Style.js';

class PropertyView extends Component{
    render(){
        var property =  this.props.property;
        var stats = property.bedroom_number + ' bed ' + property.property_type;
        if(property.bathroom_number){
            stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1 ? 'bathrooms' : 'bathroom');
        }

        
        console.log("property: ", property);

        return(
            <View style={Style.detailContainer}>
                <Image style={Style.detailImage} source={{ uri: property.img_url }} />
                <View style={Style.detailHeading}>
                    <Text style={Style.detailPrice}>£{property.price}</Text>
                    <Text style={Style.detailTitle}>{property.title}</Text>
                    <View style={Style.detailSeparator} />
                </View>
                <Text style={Style.detailDescription}>{stats}</Text>
                <Text style={Style.detailDescription}>{property.summary}</Text>
            </View>
        );
    }
}

export default PropertyView;