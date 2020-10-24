import React,{Component} from 'react';
import {View,Text,StyleSheet, Dimensions, Image,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

//import { Text,Image, View,ImageBackground, Dimensions,StyleSheet ,TextInput} from 'react-native';

var x = Dimensions.get("window").width;
//var withs = x /2;
export default class Compra extends Component{
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
    return(
        
        <View style={styles.Fondo}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Registrar Compra</Text>
            </View>
            
            <View>
               <TextInput style={styles.input }
                   label="Concepto"
                   
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View>
           <View>
               <TextInput style={styles.input}
                   label="Monto-Cantidad"

                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View><View>
               <TextInput style={styles.input}
                   label="Precio"
                   theme={{ colors: { text: 'white', primary: 'white' } }}
                   //value={text}
                   //onChangeText={text => setText(text)}
                />
           </View>

           <Text >{"\n"}</Text>
           <View style={{alignItems: 'center', justifyContent: 'center'}} >
           <Image 
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 150, height: 150,justifyContent: 'center'}}
          />
           <Text >{"\n"}</Text>
           <Button style={styles.boton} title="Agregar imagen" onPress={this.chooseFile.bind(this)} />
           
          
           </View>
        </View>
    );
      }
}
//export default Compra;
const styles = StyleSheet.create({
    Fondo: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#413E46',
        
      },
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
    input: {
        
        margin: 5,
        height: 60,
        width :x,
        //: '#596C7E',
        //color: "white",
        backgroundColor: '#596C7E',
        borderWidth: 0
     }
    
});