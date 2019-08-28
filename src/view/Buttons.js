import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";

export class ButtonSample1 extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "cyan",
          padding: 10,
          marginTop: 15,
          marginBottom: 0,
          borderRadius: 15,
          width: "95%",
          ...this.props.style
        }}
        onPress={this.props.onButtonClick}
      >
        <Text>{this.props.placeholder}</Text>
      </TouchableOpacity>
    );
  }
}

export class ButtonSample2 extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 15,
          marginTop: 15,
          marginBottom: 15,
          width: "95%",
          ...this.props.style
        }}
        onPress={this.props.onButtonClick}
      >
        <Text>{this.props.placeholder}</Text>
      </TouchableOpacity>
    );
  }
}
