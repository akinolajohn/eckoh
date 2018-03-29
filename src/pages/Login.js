import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Login extends Component<{}>{
    render()
    {
        return(
            <View style = {styles.continer}>
                <Text style={{ color:'blue'}}> Login Page </Text>
             </View>
            );
    }


}

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'gray',
        flex:1,
        alignItems: 'center'
    }

});
