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



          <Text>Nama :</Text><TextInput style={styles.inputBox} placeholder="name" placeholderTextColor="#ffffff"/>
          <Text>Username :</Text><TextInput style={styles.inputBox} placeholder="username" placeholderTextColor="#ffffff"/>
          <Text>Password :</Text><TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="#ffffff"/>
          <Text>Retype Password :</Text><TextInput style={styles.inputBox}  placeholder="Retype" placeholderTextColor="#ffffff"/>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>



         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#7697a0'
        backgroundColor:"#f0f8ff"
        },

    inputBox: {
        width:"90%",
        backgroundColor: 'rgba(118,151,160,.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#7697a0',
        marginVertical:10
        },
    
    button: {
        width: 300,
        backgroundColor: '#4a707a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        alignItems:"center"
        },
    
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'
        }
})

export default SignForm