import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import QuestionScreen from "../screens/QuestionScreen";


export default class Login extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
        backgroundColor: '#fff',
        borderColor: "rgba(180,175,175,1)",
    }
  }
  onFocus() {
    this.setState({
        backgroundColor: '#cef7fb',
    });
    this.setState({
    borderColor: 'rgb(240, 60, 77)',
});
  }

  onBlur() {
    this.setState({
      backgroundColor: '#fff',
     
    });
    this.setState({
        borderColor: "rgba(180,175,175,1)",
    });
  }
  someMethod = () =>{
    Alert.alert(
      //This is title
      "Message",
      //This is body text
      "Method not yet implemented",
      [
        { text: "Yes", onPress: () =>this.props.navigation.navigate('QuestionScreen') },
        { text: "No", onPress: () => console.log("No Pressed"), style: "cancel" },
      ],
      { cancelable: false }
      //on clicking out side, Alert will not dismiss
    );
  }

  render() {
    
    console.log(this.props);
    return (
      <View style={[styles.container, { alignSelf: "center" }]}>
        <View style={styles.group13}>
          <Image
            source={require("../assets/drive.gif")}
            // source= {{ uri: 'https://media.giphy.com/media/xUcmepXMEJWbm/giphy.gif'}}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.innerElements}>
          <View style={[styles.inputView, {borderColor: this.state.borderColor}]}>
            <Text style={styles.labelText}>Username:</Text>
            <View style={[styles.fieldView, {backgroundColor: this.state.backgroundColor}]}>
              <FontAwesomeIcon
                name="user-circle"
                style={styles.icon}
              ></FontAwesomeIcon>
              <TextInput
              onBlur={ () => this.onBlur() }
              onFocus={ () => this.onFocus() }
                placeholder="Username"
                style={styles.inputField}
              ></TextInput>
            </View>
          </View>
          <View style={[styles.inputView, { marginTop: 40, borderColor: this.state.borderColor }]}>
            <Text style={styles.labelText}>Password:</Text>
            <View style={[styles.fieldView, {backgroundColor: this.state.backgroundColor}]}>
              <EntypoIcon name="eye" style={styles.pwdIcon}></EntypoIcon>
              <TextInput key='pwdInput'
                onBlur={ () => this.onBlur() }
                onFocus={ () => this.onFocus() }
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputField}
              ></TextInput>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuestionScreen')} style={styles.button}>
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

   
  

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#000",
  },
  group13: {
    marginTop: "-5%",
  },
  image1: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
  },

  innerElements: {
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "5%",
    paddingBottom: "5%",
    // borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10,
    borderColor: '#03e6ff',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff'
  },

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    marginTop: 3,
  },
  usernameField: {
    //fontFamily: "arial",
    color: "#121212",
    height: 40,
    width: 250,
    fontSize: 20,
    paddingStart: 10,
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
  inputView: {
    width: "100%",
    height: 70,
    // alignSelf: "flex-end",
    borderColor: "rgba(180,175,175,1)",
    borderBottomWidth: 2,
  },
  labelText: {
    //fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
  },
  fieldView: {
    flexDirection: "row",
    marginTop: 5,
    paddingLeft: 15,
  },
  pwdIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    marginTop: 1,
  },
  inputField: {
    //fontFamily: "arial",
    color: "#121212",
    height: 40,
    width: 250,
    fontSize: 20,
    paddingStart: 10,
  },
  fieldView: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },

  //   Button styling
  buttonGroup: {
    // width: 293,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },

  button: {
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "rgba(92, 184, 92,1)",
    borderRadius: 8,
    shadowColor: "rgba(126,124,124,1)",
    borderColor: '#e8ede4',
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,

    alignSelf: "flex-start",
    marginHorizontal: "1%",
    minWidth: "48%",
    textAlign: "center",
  },
  logintext: {
    //fontFamily: "arial",
    color: "rgba(250,248,248,1)",
    lineHeight: 30,
    fontSize: 20,
    alignSelf: "center",
  },

  button1: {
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "rgba(91, 192, 222,1)",
    borderColor: '#e6f3f5',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "rgba(126,124,124,1)",
    shadowOffset: {
      height: 2,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,

    alignSelf: "flex-start",
    marginHorizontal: "1%",
    // marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  signUp: {
    //fontFamily: "arial",
    color: "rgba(250,248,248,1)",
    lineHeight: 30,
    fontSize: 20,
    alignSelf: "center",
  },
});

// export default Login;
