import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Image style={{width:210, height:56}}
             source={require('../img/logoLongrich.png')} />
             <Text style={styles.logoText}>Welcome to Longrich App</Text>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize:18,
        color:"#4a707a"
    }
})

export default Logo; 