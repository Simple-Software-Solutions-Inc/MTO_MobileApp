import * as React from 'react';
import { Rating} from 'react-native-ratings';
import { Text, View, Button, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native'
import Btn from './Btn'

export default class Product extends React.Component {
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
    //console.log('http://192.168.1.8:8080' + this.props.src);
    return (
     
      <View style={styles.container}>
       
       <Image
          style={styles.logo}
          source= {{ uri: 'http://192.168.1.8:8080' + this.props.src}}
        />
        <View style={styles.productInfo}>
        <Text style={styles.textDescription,  styles.titleText}>{this.props.name}</Text>
        <Text style={styles.textDescription}>{this.props.desc}</Text>
        <Text style={styles.textDescription}>Price {this.props.price}</Text>
       <Rating
        imageSize={20}
/>
 
       <Btn btnAction={()=>this.props.btnAction({name:this.props.name, value: this.props.price})}/>
        
       </View>
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
     flexDirection: 'row',
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
        fontSize: 20,
        fontWeight: "bold"
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
