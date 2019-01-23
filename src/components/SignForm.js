import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';


class SignForm extends Component{
    render(){
        return(
         <View style={styles.container}>
          <View>
            <Image style={{width:200, height:56, marginVertical:10, marginLeft:10}} 
             source={require('../img/logoLongrich.png')} />
          </View>



          <Text>Nama :</Text><TextInput style={styles.inputBox} placeholder="Nama" placeholderTextColor="#ffffff"/>
          <Text>Username : <TextInput style={styles.inputBox} placeholder="username" placeholderTextColor="#ffffff"/></Text>
          <Text>Password : <TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="#ffffff"/></Text>
          <Text>Retype Password : <TextInput style={styles.inputBox}  placeholder="Retype" placeholderTextColor="#ffffff"/></Text>

          <TouchableOpacity></TouchableOpacity>



         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor:'#7697a0'
        backgroundColor:"#f0f8ff"
        },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(118,151,160,.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#7697a0',
        // marginVertical:10
        }
})

export default SignForm