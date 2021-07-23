import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Store from "../components/Store";
import Header from "../components/Header";

export default class Home extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      value: 0,
      cart: 0,
      msg: "Hello",
      productList:[],
    };
  }

  action = (val) => {
    let carter = this.state.cart;
    let carter2 = this.state.value;
    let orderDetail = this.state.productList;
  
   
    

    if(orderDetail.length>0){
      // console.log("in loop");
      let exist = false;
      orderDetail.forEach(function(item){
        if (item.name === val.name && item.value === val.value){
          exist = true;
        }
      });
      if (!exist){
        orderDetail.push(val);
        carter2 += parseFloat(val.value);
        this.setState({ cart: (carter + 1)});  
      }
      
    }else{
      orderDetail.push(val);
      carter2 += parseFloat(val.value);
      this.setState({ cart: (carter + 1)});
    }
    this.setState({ value: (carter2)});
    this.setState({ productList: orderDetail});
    console.log(this.state.productList)



    // this.cart += parseFloat(val);
    this.setState({ msg: "testing app" });
    // console.log("This is the value: ", `${val}`);
    // console.log("state value", `${this.state.cart}`);
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header  cartItem={this.state.cart} value={this.state.value} productList={this.state.productList} showBtn={true} navigation={this.props.navigation}/>
        <Store btnAction={this.action} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});