 import React from 'react';
 import {Text} from 'react-native';

 const Header = ()=>{
 	const {textStyle} = styles;
 	return <Text style = {textStyle}> <p>Hello John This is a Header Page </p> </Text>

 }

 const styles = {
 	textStyle:{
 		fontSize: 15;
 	}
 }



 export default Header;