import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { ButtonSample1 } from "./Buttons";
import Modal from "react-native-modal";

export default class ModalPage extends Component {
  static navigationOptions = {
    title: "Button Testing",
    headerStyle: {
      backgroundColor: "#050505"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is Not a Test Screen</Text>
        <ButtonSample1
          placeholder={"Go Back"}
          onButtonClick={() => {
            this.props.navigation.goBack();
          }}
        />
        <Modal style={{ flex: 1 }}>
          <View>
            <Text>I am a test modal</Text>
          </View>
        </Modal>
      </View>
    );
  }
}
