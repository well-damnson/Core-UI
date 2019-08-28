import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./view/index";
import { ButtonSample1 } from "./view/Buttons";

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#050505"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text>Open up App.js to start working on your app!</Text>
        <ButtonSample1
          onButtonClick={() => {
            this.props.navigation.navigate("Sample");
          }}
          placeholder={"To Sample Page for Buttons"}
        />
        <ButtonSample1
          onButtonClick={() => {
            this.props.navigation.navigate("KbAvoid");
          }}
          placeholder={"To Sample Page for Keyboard Avoiding View"}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: App
  },
  Sample: {
    screen: Screen.NotSample
  }
});

const ListStack = createStackNavigator({
  SandBox: {
    screen: App
  },
  KbAvoid: {
    screen: Screen.KbAvoid
  }
});

const AddStack = createStackNavigator({
  AddEntry: {
    screen: App
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: App
  }
});

const getTabBarIcon = (navigation, tintColor, focused) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "This") {
    iconName = "ios-home";
  } else if (routeName === "All") {
    iconName = "ios-aperture";
  } else if (routeName === "Heads") {
    iconName = "ios-add";
  } else if (routeName === "Home") {
    iconName = "logo-google";
  }
  return (
    <IconComponent
      name={iconName}
      size={24}
      color={focused ? "cyan" : "#fc2"}
    />
  );
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      This: HomeStack,
      All: ListStack,
      Heads: AddStack,
      Home: ProfileStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor, focused }) =>
          getTabBarIcon(navigation, tintColor, focused)
      }),

      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "grey"
      }
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    justifyContent: "center"
  }
});
