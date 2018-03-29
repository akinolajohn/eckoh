import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    statusBar,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

//import form from '../components/form';
 //react-native run-android
//react-native start
// import form from '../components/form.js';

export default class App extends Component<{}>{
render(){
    return (
//<form />

        <View style = { styles.container }>
            <Text style={{ color:'white' , fontSize: 20}}> John Akinola </Text>
             <Text style={{ color:'#D1C108' , fontSize: 22 , padding:35}}>Welcome To My React Native App  I do hope you find it interesting</Text>
            <TextInput style = { styles.inputBox } placeholder = "Enter Email Here"  placeholderTextColor = '#ffffff'  />
            <TextInput  secureTextEntry = {true}  style = { styles.inputBox } placeholder = "Password"  placeholderTextColor = '#ffffff'  />

            <TouchableOpacity>
                  <Text style={styles.buttonText}> Login</Text>
            </TouchableOpacity>


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

    },

    inputBox: {
        width:300,
        borderRadius: 20,
        paddingHorizontal:16,
        marginVertical:16,
        fontSize:16,
        color:'#117FE1'
    },
// DONT FORGET TO USE COMMAS. ITS A COMMON ERROR#

buttonText: {
    backgroundColor: '#117FE1',
    fontSize:16,
    fontWeight: '500',
    borderRadius: 10,
    color: '#ffffff',
    paddingVertical: 10,
    padding:10,
    marginVertical: 10

},

button:{
        backgroundColor: '#117FE1',
        fontSize:24,
        flex:1,
        width:300,
        borderRadius: 20,
        paddingVertical:16,
        marginVertical: 10,
        color:'#D1C108',
        textAlign: 'center',
        alignItems:'center'

}

});


