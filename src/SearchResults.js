'use strict';

import React, { Component } from 'react';
import{
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
} from 'react-native';
import Style from './Style.js';
import PropertyView from './PropertyView.js';

class SearchResults extends Component{
    constructor(props){
        super(props);

        //supply data to listview using listview.datasource
        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.listings)
        }

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(rowData, sectionID, rowID){
        console.log(rowData.img_url);
        return(
            <TouchableHighlight 
                underlayColor='#dddddd'
                onPress={() => this.rowPressed(rowID)}>
                    <View> 
                        <View style={Style.rowContainer}>
                            <Image style={Style.thumb} source={{ uri: rowData.img_url }} />
                            <View style={Style.textContainer}>
                                <Text style={Style.price}>£{rowData.price}</Text>
                                <Text tyle={Style.title}
                                    numberOfLines={1}>
                                        {rowData.title}
                                </Text>
                            </View>
                        </View>
                        <View style={Style.separator} />
                    </View>
            </TouchableHighlight>
        );
    }

    rowPressed(rowID){
        var property = this.props.listings[rowID];

        this.props.navigator.push({
            title: 'Property',
            component: PropertyView,
            passProps: {property}
        })
    }

    render(){
        return(
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
        );
    }
}

export default SearchResults;