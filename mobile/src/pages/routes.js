import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {} from "react";
import Main from "./Main";
import Intro from "./Intro";
import ProfileProf from "./ProfileProf";
import FormProf from "./FormProf";

const Config = createStackNavigator(
  {
    Intro: {
      screen: Intro,
      navigationOptions: {
        title: "",
        headerStyle: {
          height: 1
        }
      }
    },

    FormProf: {
      screen: FormProf,
      navigationOptions: {
        title: "Cadastre-se"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#54CEDB"
      }
    }
  }
);
const Stack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "Encontre seu professor"
    }
  },
  ProfileProf: {
    screen: ProfileProf,
    navigationOptions: {
      title: "ProfileProf",
      headerShown: false
    }
  }
});

const Routes = createBottomTabNavigator({
  Main: Stack,
  Config
});

export default createAppContainer(Routes);
