import React, { Component } from "react";
import Login from "../components/Login";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import Header from "../components/Header";

export default class LoginScreen extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
  }

  render() {
  return (
    <View style={styles.container}>
       <Header />
      <Login></Login>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }});
// export default LoginScreen;
