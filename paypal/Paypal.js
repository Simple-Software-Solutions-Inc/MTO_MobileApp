import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import OrderItem from "../components/OrderItem";
// import Product from "../components/Product";

export default class AppCheckout extends React.Component {
    state = {
        showModal: false,
        status: "Pending"
    };
    handleResponse = data => {
        if (data.title === "success") {
            this.setState({ showModal: false, status: "Complete" });
        } else if (data.title === "cancel") {
            this.setState({ showModal: false, status: "Cancelled" });
        } else {
            return;
        }
    };
    render() {
        const { products} = this.props.route.params;
//         let url = new URL('http://192.168.1.8:8080/store/checkout/');

// url.searchParams.set('product', JSON.stringify(products));
// console.log(url);
        // console.log('http://localhost:8080/store/checkout/?product=%5B%7B"name"%3A"G+Exam"%2C"value"%3A120%7D%5D');
        return (
            <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri:'http://localhost:8080/store/checkout/?product=%5B%7B"name"%3A"G+Exam"%2C"value"%3A120%7D%5D' }}
                        onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />
                </Modal>
                <TouchableOpacity
                    style={{ width: 300, height: 100}}
                    onPress={() => this.setState({ showModal: true })}
                >
                    <Text style={{backgroundColor:'orange', padding:10, borderRadius:10, textAlign:'center', fontSize:20, color:'white', alignSelf:'center'}}>Pay with Paypal</Text>
                    {/* {products.map((x, i)=>(
        <OrderItem 
        //   btnAction= {this.props.btnAction}
          key={i} 
        //   src={x.image_file}
          name={x.name} 
        //   desc={x.description} 
          price={x.price}
          />
          ))} */}
                </TouchableOpacity>
                <Text>Payment Status: {this.state.status}</Text>
            </View>
        );
    }
}