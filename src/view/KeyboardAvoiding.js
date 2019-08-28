import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { ButtonSample1 } from "./Buttons";

export default class KeyboardAvoid extends Component {
  static navigationOptions = {
    title: "Keyboard Avoiding Test Page",
    headerStyle: {
      backgroundColor: "#050505"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 30, marginTop: 15 }}>
          This is a Test Screen
        </Text>
        <ButtonSample1
          placeholder={
            "Button to Go back, Or you can press arrow button up there"
          }
          onButtonClick={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={{ flex: 1 }} />
        <TextInput
          style={{
            width: "75%",
            padding: 10,
            backgroundColor: "yellow",
            borderRadius: 15,
            margin: 15,
            alignItems: "center",
            justifyContent: "center"
          }}
          placeholder={"Beep"}
        />
      </KeyboardAvoidingView>
    );
  }
}
