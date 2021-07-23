import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Question from "../components/Question";
import Header from "../components/Header";
import {BaseUrl}  from "../api/client"

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Svg, { Ellipse } from "react-native-svg";

export default class QuestionScreen extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor

    super(props);
    this.state = {
      questionList: [{}],
      answerList: [{}],
      position: 0,
      lastposition: false,
      isSet: false,
      isResultSet: false,
      score: '',
      resultText: 'pass',
    };
   
  }

  componentDidMount() {
    if (this.state.isSet === false) {
      this.getQuestions();
    }
  }

  //get the questions from server
  getQuestions = () => {
    axios
      .get(BaseUrl + "/api/questions")
      .then((response) => {
        // console.log(response.data);
        this.setState({ questionList: response.data });
        this.setState({ isSet: true });
        let ans = [];
        response.data.forEach((elem) =>
          ans.push({ questionNum: elem.Number, answer: "" })
        );
        this.setState({ answerList: ans });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //sets the answer in the state
  setAnswer = (val) => {
    let answerList = this.state.answerList;
    if (answerList.length > 0) {
      let exist = false;
      answerList.forEach(function (item) {
        if (item.questionNum === val.questionNum) {
          item.answer = val.answer;
          exist = true;
          return;
        }
      });
      if (!exist) {
        answerList.push(val);
      }
    } else {
      answerList.push(val);
    }
    this.setState({ answerList: answerList });
  };

  //sets the position for the next questions
  incQuestion = (val) => {
    let position = this.state.position;
    if (this.state.questionList.length - 1 > position) {
      this.setState({ position: position + 1 });
      position++;
      if (position + 1 == this.state.questionList.length - 1) {
        this.setState({ lastposition: true });
      } else {
        this.setState({ lastposition: false });
      }
    }
  };

  //sets the position for the previous questions
  decQuestion = (val) => {
    let position = this.state.position;
    if (position > 0) {
      this.setState({ position: position - 1 });
      position--;
      if (position == this.state.questionList.length - 1) {
        this.setState({ lastposition: true });
      } else {
        this.setState({ lastposition: false });
      }
    }
  };

  //calculates the score
  calculateScore = () => {
    this.setState({ isResultSet: true });
    let score = 0;
    let ques = this.state.questionList;

    for (const elem of ques) {
      let ans = this.state.answerList;
      for (const elemAns of ans) {
        if (
          elemAns.answer === elem.Answer &&
          elemAns.questionNum === elem.Number
        ) {
          score++;
        }
      }
    }
    
    this.setState({ score: score + "/" + this.state.questionList.length });
    if((score/this.state.questionList.length)>=targetScore){
      this.setState({resultText: 'pass'});
    }
    else{
      this.setState({resultText: 'fail'});
    }
  };

  //displays either the questions or the result
  showResult = () => {
    if (this.state.isResultSet) {
      return (
        <View style={{ backgroundColor: "#fff" }}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 200 200" style={[styles.ellipse]}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill={resultArray[this.state.resultText].bgColor}
                cx={100}
                cy={100}
                rx={100}
                ry={100}
              ></Ellipse>
            </Svg>
            <Text
              style={[
                {
                  color: "#fff",
                  alignSelf: "center",
                  position: "absolute",
                  fontSize: 60,
                },
              ]}
            >
              {this.state.score}
            </Text>
          </View>
          <View style={[styles.options, { marginTop: 40 }]}>
            <View style={[styles.questionView, { width: "25%" }]}>
            {resultArray[this.state.resultText].component}
            </View>
            <Text style={[styles.optionText, { width: "70%" }]}>
              {resultArray[this.state.resultText].msg}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <Question
        btnAction={this.setAnswer}
        nextAction={this.incQuestion}
        prevAction={this.decQuestion}
        subAction={this.calculateScore}
        question={this.state.questionList[this.state.position]}
        answer={this.state.answerList[this.state.position]}
        lastposition={this.state.lastposition}
      ></Question>
    );
  };


  render() {
    // console.log(BaseUrl);
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>{this.showResult()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  questionView: {
    width: "100%",
    flexDirection: "row",
    padding: 5,
  },
  ellipseStack: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  ellipse: {
    width: "80%",
    height: 200,
    margin: 10,
    alignSelf: "center",
    color: "#000",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    margin: 5,
    fontSize: 80,
    height: 80,
    width: 80,
  },
  optionText: {
    flexWrap: "wrap",
    paddingLeft: 5,
    fontSize: 35,
    color: "#fff",
    textAlign: "center",
  },
  options: {
    flexDirection: "row",
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#000",
  },

});

var targetScore = 0.7;
let component1 =()=>{
  return (
  <FeatherIcon
    name="check-circle"
    style={[styles.icon, { color: "green" }]}
  ></FeatherIcon>
);
  };

let component2 =()=>{
  return(
  <SimpleLineIconsIcon
    name="close"
    style={[styles.icon, { color: "red" }]}
  ></SimpleLineIconsIcon>
);};

const resultArray = {
  pass: { msg: "Congratulations! You've passed", component: component1(), bgColor:'green' },
  fail: { msg: "Sorry! You didn't pass.", component: component2(), bgColor:'#bf4941' },
};

