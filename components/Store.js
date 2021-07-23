import * as React from 'react';
import axios from 'axios';
import {BaseUrl}  from "../api/client"
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Product from './Product';
import { Dimensions } from 'react-native';

export default class Store extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    var data = [];
    super(props);
    this.state = {
      products: [],
      // action: props.buttonAction,
    };
    this.buttonAction = this.buttonAction; //.bind(this);	 
  }

  componentDidMount(){
		this. buttonAction();
  this.data = this.state.products;
  
	}

  buttonAction = () =>{
    axios.get(BaseUrl + '/api/products')
    .then( (response) => {
      //console.log(response.data);
      this.setState((state)=>({ "products": response.data}));
     
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    // console.log(this.props , ' The store');
    return (
      <View style={styles.container}>
          
        <ScrollView>

        {this.state.products.map((x)=>(
        <Product 
          btnAction= {this.props.btnAction}
          key={x.productId} 
          src={x.image_file}
          name={x.name} 
          desc={x.description} 
          price={x.price}
          />
          ))}

         {/* <option key={i} value={x}>{x}</option>))}
          <Product name="Test Product" desc='Test' price='$90'/>
          <Product name="Test Product" desc='Test' price='$90'/>
          <Product name="Test Product" desc='Test' price='$90'/>
           <Product name="Test Product" desc='Test' price='$90'/> */}
        </ScrollView>
      </View>
    );
  }

 // buttonAction = function(){
    //const products = [];
    
 // }

}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
console.log("test");

 
