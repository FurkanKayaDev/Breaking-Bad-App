import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: '50%'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        textAlign: 'center',
        marginVertical: 5
    },
    img: {
        height: windowHeight / 2.5,
        width: windowWidth / 2.1,
        marginLeft:5,
    },
    load: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'gray',
        color: 'white',
        borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: 100
    },

    footer_text : {
    fontSize: 24, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: 'red',
    margin:10
}
})