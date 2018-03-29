
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';


export default class Logo extends Component<{}>{
render(){
    return (
        <View style = {styles.container}>
            <Image style={{width:30, height:50 }}
             source={require('../images/logo.png')}/>
            <Text style={syles.logoText}>Page Two Welcome Here</Text>
        </View>
        );

    }
}

const styles =  StyleSheet.create({
    container : {

        backgroundColor: '#1c313a',
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
logoText : {
    marginVertical: 15,
    fontSize: 20px,
    color: 'white'
        }


});


