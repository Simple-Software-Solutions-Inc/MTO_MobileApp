import * as React from 'react';
import { Rating} from 'react-native-ratings';
import { Text, View, Button, StyleSheet, Image , TouchableOpacity, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 



export default class Product extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    var data = [];
    super(props);
    this.state = {
     cartItems: 0,
    };
    this.buttonAction = this.buttonAction; //.bind(this);	 
  }

  render() {
   //const { navigate } = this.props.navigation;  
    return (
     
      <View style={{marginTop:20}}>
      <View style={styles.container}>
       
       <Image
          style={styles.logo}
          source={require('../assets/ca1.png')}
        />
        <View style={styles.productInfo}>
        <Text style={styles.textDescription,  styles.titleText}>{name}</Text>
        <Text style={styles.textDescription,  styles.subTitleText}>{desc}</Text>
       </View>
      
        {(typeof this.props.showBtn !== 'undefined')?
         <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <Text  onPress={()=>cartFunct(this.props.cartItem, this.props.value, ()=>this.props.navigation.navigate('Checkout', {products: this.props.productList}))} style={{borderStyle:'solid', backgroundColor:'black', borderWidth:1, borderRadius:5, borderColor: 'white', fontSize:16, padding:10, color: 'white'}}>{this.props.productList.length}
         <FontAwesome5 name="cart-plus" size={20} color='white'  borderRadius={5} style={{marginTop:40}} />
         </Text>
         </View>: <Text></Text>}
     
      
       </View>
       <View style={{backgroundColor:'black', margin:0}} >
      <Text style={{fontSize:20, textAlign:'center', color:'white', padding:5}}>DriveTest App Store</Text>
      </View>
      
      </View>
    );
  }
}
const appName = "DriveTest Store";
const name = "Ontario";
const desc= "Ministry of Transport";
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
     display: 'flex',
     flexDirection: 'row',
    // / marginBottom: 10,
    //  marginLeft: 10,
     borderBottomWidth:1,
    //  borderColor: '#e6e7e8',
  },
  logo: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    display: 'flex',
    margin: 10,
    marginRight: 0,
  },

  textDescription:{
    marginBottom: 5,
    },

    titleText: {
        fontSize: 45,
        fontWeight: "bold"
      },

      subTitleText:{
        fontSize: 16,
      },

    textButtonStyle:{
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    buttonStyle:{
    marginTop: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 8,
    },

   productInfo: {
    width:  Dimensions.get("window").width -168,
    alignItems: 'flex-start',
    display: 'flex',
    padding: 5,
    // borderStyle: 'solid',
    // borderWidth: '5'

  },
});

let cartFunct = (count, value, nav) =>{
  Alert.alert(
    //This is title
   'Shopping Cart',
     //This is body text
   'You have (' + count +') item(s) valued at $' + value + ' in this cart.\nAre you ready to check out?',
   [
     {text: 'Yes', onPress:() => nav()},
     {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
     {text: 'Remove All', onPress: () => console.log('Delete All Items')},
   ],
   { cancelable: false }
   //on clicking out side, Alert will not dismiss
 );
};