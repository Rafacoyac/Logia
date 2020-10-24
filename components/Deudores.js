import React,{Component} from 'react';
import {View,Text,StyleSheet, Dimensions, Image,Button,Tex} from 'react-native';
export default class Deudores extends Component{
    render(){
        return(
            <View style={{  flex: 1 ,backgroundColor: '#413E46'}}>
                <View style={styles.Header}>
                   <Text style={styles.texto}>Deudores</Text>
                </View>
                <View style={{flexDirection: "row", height: 100, padding: 20,borderBottomColor: 'white', 
    borderBottomWidth: 1, }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={require('../images/login.jpg')}style={{ borderRadius:50, width: 50, height: 50,justifyContent: 'center'}}></Image>
                        </View> 
                        <View style={{ flex: 0.7 }}>
                            <Text style={{color:'white'}}>Andres Morales</Text>
                            <Text style={{color:'#7C95AD'}}>Fecha de ultimo pago: 06/Julio/2020</Text>
                        </View> 
                        <View >
                           <Text style={{color:'red'}}>$ 300.00</Text>
                        </View>
                        
                   </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color :'white'
    },
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6B24B', 
        height: 50
      },
});