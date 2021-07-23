import * as React from 'react';
import { Rating} from 'react-native-ratings';
import { Text, View, Button, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native'
import Btn from './Btn'
import {BaseUrl}  from "../api/client"

export default class OrderItem extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      // price : "",
      // name  : "",
      // desc : "",
    };	 
  }
  render() {
    //console.log(BaseUrl + '' + this.props.src);
    return (
     
      <View>
        <Text style={[{minWidth:'40%', textAlign:'left', paddingHorizontal: 10}, styles.titleText]}>{this.props.name}jjj</Text>
        <Text style={[{minWidth:'20%', textAlign: 'center'}, styles.titleText]}>Qty: {this.props.desc}</Text>
        <Text style={[{minWidth:'30%', textAlign: 'center'}, styles.titleText]}>Price {this.props.price}</Text>
      </View>
    );
  }
}


const btn = () =>{
       
};


const price = "$900.00";
const name = "Product Name";
const desc= "Product Description";
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
     display: 'flex',
     flexDirection: 'column',
     marginBottom: 10,
     borderBottomWidth:1,
     borderColor: '#e6e7e8',
  },
  logo: {
    height: 100,
    width: 100,
    alignItems: 'flex-start',
    display: 'flex',
    margin: 10,
  },

  textDescription:{
    marginBottom: 5,
    },

    titleText: {
        fontSize: 16,
        // fontWeight: "bold",
        // textAlign: 'center',  
        borderWidth: 1,
        borderLeftColor: '#e6e6e6',
        borderRightColor: '#e6e6e6',
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
    padding: 10,
    // borderStyle: 'solid',
    // borderWidth: '5'

  },
});
