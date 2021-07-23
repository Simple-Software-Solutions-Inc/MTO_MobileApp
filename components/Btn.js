import * as React from 'react';
import { Rating} from 'react-native-ratings';
import { Text, View, Button, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native'

export default class Product extends React.Component {
  render() {
    return (
      <View>
      <Button 
            onPress ={this.props.btnAction}
            title='Add to Cart'
            color='#007AFF'
            accessibilityLabel='Learn more about this purple button'/>
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
    height: 100,
    width: 100,
    alignItems: 'flex-start',
    display: 'flex',
    margin: 10,
    marginRight: 0,
  },

  textDescription:{
    marginBottom: 5,
    },

    titleText: {
        fontSize: 60,
        fontWeight: "bold"
      },

      subTitleText:{
        fontSize: 21,
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
