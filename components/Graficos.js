
import React,{Component} from 'react';
import {TextInput,View,Text,StyleSheet, Dimensions, Image,Button,Tex} from 'react-native';

export default class Graficos extends Component{
    render(){
        return(
            <View style={{  flex: 1 ,backgroundColor: '#413E46'}}>
                <View style={styles.Header}>
                   <Text style={styles.texto}>Ingresos</Text>
                </View>
        <Text>{"\n"}</Text>
            <View style={{flexDirection: "row"}}>
                <View style={{flex:0.7}}>
                <Image source={require('../images/grafica.png')}style={{width: 250, height: 250,justifyContent: 'center'}}></Image>
                </View>
                <View style={{flex:0.3}}>
                    <Text> <Image style={{backgroundColor:'white',width: 15, height: 15}}></Image> Hola mundo</Text>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6B24B', 
        height: 50
      },
      texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color :'white'
    },
});