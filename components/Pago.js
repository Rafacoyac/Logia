import React,{Component} from 'react';
import { TouchableOpacity, Text, Image,Button, View, StyleSheet, } from 'react-native';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
//import {FileInput} from 'react-input-file';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
//import { max } from 'react-native-reanimated';
//imporunderlineColorAndroid="white"
//navigation = require('@react-navigation/native');

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () =>{
    var options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
  }
  /*chooseFile = () => {
    var options = {
      title: 'Selecciona una Imagen',
      customButtons: [
        { name: 'customOptionKe', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
*/
ImagePicker.launchImageLibrary(options, response => {
  console.log('Response = ', response);
      if (response.didCancel) {
        console.log('el usuario a salido');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  }; 
  render(){
    const {navigate} = this.props.navigation;
    return(
        <View style={{  flex: 1 ,backgroundColor: '#413E46' }}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Pago</Text>
            </View>
            
           <View>
               <TextInput style={styles.input }
                   label="Referencia bancaria"
                   
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View>
           <View>
               <TextInput style={styles.input}
                   label="Nombre"
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View><View>
               <TextInput style={styles.input}
                   label="Apellidos"
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View><View>
               <TextInput style={styles.input}
                   label="RFC"
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View>
           <View>
               <TextInput style={styles.input}
                   label="Monto"
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View>
   
           <View style={{alignItems: 'center', justifyContent: 'center'}} >
           <Image 
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 150, height: 150,justifyContent: 'center'}}
          />
           
           <Button style={styles.boton} title="Agregar imagen" onPress={this.chooseFile.bind(this)} />
           <Text >{"\n"}</Text>
           <Button style={styles.boton} title="Generar Comprobante" onPress={() => navigate('Baucher')} />
           </View>
    
      </View>
    );
          }
}

//export default Pago;
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#596C7E',
      
    },
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
    input: {
        
        margin: 5,
        height: 60,
        width : 350,
        backgroundColor: '#596C7E',
        color: "white",
        //borderColor: '#7a42f4',
        borderWidth: 0
     },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      fontFamily : 'Arial',
        },
    tinyLogo: {
      //padding : -30,
      width: 120,
      height: 120,
    },
    boton:{
      width: 150,
      height: 20,
      justifyContent: 'center'
    }
  });