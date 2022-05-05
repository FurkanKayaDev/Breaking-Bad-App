import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    img: {
        height: windowHeight /1.6,
        width: windowWidth / 1,
        marginLeft: 5,
        resizeMode:'stretch',
    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:10,
        color: 'gray'
    },

    inline_text : {
        fontStyle:'italic',
        color:'#066293',
    }
})