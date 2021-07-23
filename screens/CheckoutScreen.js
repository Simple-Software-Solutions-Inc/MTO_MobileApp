import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import Store from "../components/Store";
import Header from "../components/Header";
import OrderItem from "../components/OrderItem";
import { color } from "react-native-reanimated";
import PaypalExpressBtn from 'react-paypal-express-checkout';


export default class Checkout extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      cart: 0,
      msg: "Hello",
    };
  }

  action = (val) => {
    let carter = this.state.cart;
    this.setState({ cart: carter + 1 });
    // this.cart += parseFloat(val);
    this.setState({ msg: "testing app" });
    // console.log("This is the value: ", `${val}`);
    // console.log("state value", `${this.state.cart}`);
  };

  render() {
   
    return (
      <View style={styles.container}>
        <Header/>
        <Text style={{backgroundColor:'#fafafa', margin:20, padding:10, fontSize:20}}>Order Info:</Text>
        <ScrollView>
        <View style={styles.tableStructure}>
          <Text style={[styles.tableCell, styles.cellLeft]}>Product Name</Text>
          <Text style={[styles.tableCell, styles.cellMiddle]}>Quantity</Text>
          <Text style={[styles.tableCell, styles.cellRight]}>Price</Text>
        </View>
        <OrderItem styleEffect={styles}/>
        <View style={styles.tableStructure1}>
          <Text style={styles.tableCell1}>Total</Text>
          <Text style={styles.tableCell2}>value</Text>
        </View>
          </ScrollView>
          
        <View style={styles.row}>
      <TouchableOpacity  >
          <Text  style={styles.btn} onPress={()=>alert('Thanks for your purchase.')}>
            Paypal Payment
          </Text>
        </TouchableOpacity>
        </View>
       <View>
       <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri: 'http://192.168.1.8:8080/store/checkout/?product=%5B%7B"name"%3A"G+Exam"%2C"value"%3A120%7D%5D' }}
                        onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />
                </Modal>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  btn: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 3,
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },

  tableStructure:{
  //  backgroundColor: "grey",
   display: 'flex',
   flexDirection: 'row',
   flexWrap: "wrap",
   alignSelf: 'center',
  },

  tableStructure1:{
    //  backgroundColor: "grey",
     display: 'flex',
     flexDirection:'row',
     flexWrap: "wrap",
     alignSelf: 'center',
    },

  tableEnd:{
    //  backgroundColor: "grey",
     display: 'flex',
     flexDirection: 'column',
     flexWrap: "wrap",
     alignSelf: 'center',
    },

    tableCell1:{
      minWidth: '60%',
      backgroundColor: '#102b3b',
      color: 'white',
    fontWeight: 'bold',
    // marginLeft: '1%',
    borderRightColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 20,
    // borderBottomRightRadius:10,
    // borderBottomLeftRadius:10,
    borderRightColor: 'white',
    borderWidth: 1,
    textAlign: 'right',
    },

    tableCell2:{
      minWidth: '30%',
      backgroundColor: '#102b3b',
      color: 'white',
    fontWeight: 'bold',
    // marginLeft: '1%',
    // marginRight: '1%',
    paddingVertical: 6,
    paddingHorizontal: 8,
    // borderBottomRightRadius:10,
   textAlign:'center',
    },

  tableCell:{
    borderStyle: "solid",
    borderWidth: 1,
    // marginHorizontal: "1%",
    
    // alignSelf: "flex-start",
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#102b3b',
    color: 'white',
    fontWeight: 'bold',
    
  },

  cellRight:{
    borderTopRightRadius:10,
    minWidth: "30%",
  },

  cellMiddle:{
    minWidth: "20%",
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },

  cellLeft:{
    borderTopLeftRadius: 10,
    borderLeftColor: 'grey',
    minWidth: "40%",
    textAlign: 'left',
    paddingHorizontal: 10,

  },
});