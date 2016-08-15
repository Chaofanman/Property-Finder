import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },

    container: {
        flex: 1
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    searchContainer: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },

    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },

    image: {
        width: 217,
        height: 138
    },

    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },

    detailContainer: {
        marginTop: 65
    },
    detailHeading: {
        backgroundColor: '#F8F8F8',
    },
    detailSeparator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },
    detailImage: {
        width: 400,
        height: 300
    },
    detailPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
        color: '#48BBEC'
    },
    detailTitle: {
        fontSize: 20,
        margin: 5,
        color: '#656565'
    },
    detailDescription: {
        fontSize: 18,
        margin: 5,
        color: '#656565'
    }
});

export default Style;