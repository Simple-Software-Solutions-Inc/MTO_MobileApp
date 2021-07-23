import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import OrderItem from "../components/OrderItem";
import {BaseUrl}  from "../api/client"
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

        return (
            <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri:BaseUrl + '/store/checkout/?product=' + encodeURI(JSON.stringify(products)) }}
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
       
                </TouchableOpacity>
                <Text>Payment Status: {this.state.status}</Text>
            </View>
        );
    }
}