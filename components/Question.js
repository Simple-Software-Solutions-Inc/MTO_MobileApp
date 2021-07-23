import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from "react-native-modal";

export default class Question extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    var data = [];
    super(props);
    this.state = {
      isModalVisible: false,
      answer: this.props.answer,
    };
  }

  //sets the radio button for each question
  answerCall = (letter) => {
      if (this.props.answer.answer === letter) {
      return (
        <MaterialIconsIcon
          key={"MIC_" + letter}
          name="radio-button-checked"
          style={styles.icon}
        ></MaterialIconsIcon>
      );
    }
    return (
      <IoniconsIcon
        key={"IC_" + letter}
        name="md-radio-button-off"
        style={styles.icon}
      ></IoniconsIcon>
    );
  };

  //display the appropriate icon for the media type
  mediaCall = () => {
    if (this.props.question.Media_Type === "Video") {
      return (
        <EntypoIcon
          name="folder-video"
          style={[styles.icon, { color: "rgba(0,0,0,1)" }]}
        ></EntypoIcon>
      );
    } else if (this.props.question.Media_Type === "Image") {
      return (
        <MaterialIconsIcon
          name="monochrome-photos"
          style={[styles.icon, { color: "rgba(0,0,0,1)" }]}
        ></MaterialIconsIcon>
      );
    }
  };

   //display the appropriate content for the media type
  mediaFileCall =()=>{
    if (this.props.question.Media_Type === "Video") {
      return (
        <YoutubePlayer
        height={300}
        play={true}
        videoId={this.props.question.Media_Path.split("/embed/")[1]}
      />
      );
    } else if (this.props.question.Media_Type === "Image") {
      return (
        <Image
        style={{width: '100%',
        height: undefined,
        aspectRatio: 1,}}
          // source={require('../assets/ca1.png')}
          source= {{ uri: 'http://192.168.1.8:8080' + this.props.question.Media_Path}}
        />
      );
  };
};

 //display a modal screen with the media content
  modalCall = () =>{
    return (
    <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row-reverse', marginBottom:10}}>
            <TouchableOpacity style={{borderRadius:5, borderWidth:1, borderColor:'white'}} onPress={()=>this.toggleModal(false)}>
              <Icon name="window-close" style={[styles.icon, {color:'white'}]}></Icon>
            </TouchableOpacity>
            </View>
            <View>
              {this.mediaFileCall()}
            </View>
            <View>

            </View>
          </View>
        </Modal>);
  };

  //sets the answer for the questions
  selectAnswer = (ans) => {
    let newAnswer = {questionNum:this.props.question.Number, answer: ans};
    this.setState({ answer: newAnswer });
    this.props.btnAction({questionNum: this.props.question.Number, answer: ans});
  };

  //controls the modal visibility
  toggleModal = (val) => {
    this.setState({ isModalVisible: val });
  };

  //moves to the next question
  localNext =() =>{
    this.props.nextAction();
    this.resetLocalState();
  };

  //moves to the previous question
  localPrev =() =>{
    this.props.prevAction();
    this.resetLocalState();
  };

  //resets the local state variables
  resetLocalState = () => {
    let  answer= this.props.answer;
    this.setState({answer: answer });
  };

  //displays the submit button
  submitButtonShow = () =>{
    if (!this.props.lastposition){
      return( <TouchableOpacity onPress={()=>this.localNext()}
      style={[styles.button, { backgroundColor: "black" }]}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
    );
    }
    return(<TouchableOpacity   onPress={()=>this.submitResult()}
    style={[styles.button, { backgroundColor: "green" }]}
  >
    <Text style={styles.buttonText}>Submit</Text>
  </TouchableOpacity>);
  }

  //displays a dialog box prompting user for submission
  submitResult = () => {
    Alert.alert(
      //This is title
      "Submit Quiz Answers",
      //This is body text
      "Are you sure you want to submit your final answers?",
      [
        { text: "Yes", onPress: () => this.props.subAction() },
        { text: "No", onPress: () => console.log("No Pressed"), style: "cancel" },
      ],
      { cancelable: false }
      //on clicking out side, Alert will not dismiss
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionView}>
          <Text style={styles.questionNumLabel}>
            Question #{this.props.question.Number}
          </Text>
          <View style={styles.questionTextView}>
            <Text style={styles.textLabel}>{this.props.question.Question}</Text>

            <View style={styles.mediaGroup}>
              <TouchableOpacity
                style={styles.media}
                onPress={() => this.toggleModal(true)}
              >
                {this.mediaCall()}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.questionOptions}>
          <TouchableOpacity
            key={"TO_1"}
            style={styles.buttonOption}
            onPress={() => this.selectAnswer("A")}
          >
            <View key={"TOV_1"} style={styles.options}>
              <View key={"TOVV_1"} style={styles.iconGroup}>
                {this.answerCall("A")}
              </View>
              <Text key={"TXT_1"} style={styles.optionText}>
                {this.props.question.Option_A}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            key={"TO_2"}
            style={styles.buttonOption}
            onPress={() => this.selectAnswer("B")}
          >
            <View key={"TOV_2"} style={styles.options}>
              <View key={"TOVV_2"} style={styles.iconGroup}>
                {this.answerCall("B")}
              </View>
              <Text key={"TXT_2"} style={styles.optionText}>
                {this.props.question.Option_B}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            ref="C"
            key={"TO_3"}
            style={styles.buttonOption}
            onPress={() => this.selectAnswer("C")}
          >
            <View key={"TOV_3"} style={styles.options}>
              <View key={"TOVV_3"} style={styles.iconGroup}>
                {this.answerCall("C")}
              </View>
              <Text key={"TXT_3"} style={styles.optionText}>
                {this.props.question.Option_C}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            ref="D"
            key={"TO_4"}
            style={styles.buttonOption}
            onPress={() => this.selectAnswer("D")}
          >
            <View key={"TOV_4"} style={styles.options}>
              <View key={"TOVV_4"} style={styles.iconGroup}>
                {this.answerCall("D")}
              </View>
              <Text key={"TXT_4"} style={styles.optionText}>
                {this.props.question.Option_D}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={()=>this.localPrev()}
            style={[styles.button, { backgroundColor: "black" }]}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          {this.submitButtonShow()}
         
        </View>
        {this.modalCall()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: "#fff",
  },
  questionView: {
    width: "100%",
    padding: 5,
    backgroundColor: "#E6E6E6",
    
  },
  questionNumLabel: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 20,
    height: 30,
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    paddingLeft: 10,
  },

  questionTextView: {
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 6,
  },

  textLabel: {
    color: "#121212",
    marginBottom: 5,
    width: "100%",
    paddingLeft: 10,
    fontSize: 20,
    flexWrap: "wrap",
  },
  mediaGroup: {
    flexDirection: "row-reverse",
    alignContent: "flex-end",
  },
  media: {
    backgroundColor: "white",
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    borderRadius: 5,
    fontSize: 40,
    height: 40,
    width: 40,
  },
  questionOptions: {
    width: "100%",
    padding: 10,
    marginTop: 10,
  },

  optionText: {
    flexWrap: "wrap",
    maxWidth: "85%",
    paddingLeft: 5,
    fontSize: 20,
  },
  iconGroup: {
    flexDirection: "row",
    margin: 5,
    width: "10%",
  },
  options: {
    flexDirection: "row",
    margin: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonOption: {
    width: "100%",
    padding: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginVertical: "1%",
    backgroundColor: "#E6E6E6",
  },
  button: {
    minWidth: "48%",
    padding: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    backgroundColor: "#E6E6E6",
  },

  buttonText: {
    color: "#fff",
    padding: 5,
    alignSelf: "center",
    fontWeight: "bold",
  },
  buttonGroup: {
    width: "100%",
    marginTop: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
});
