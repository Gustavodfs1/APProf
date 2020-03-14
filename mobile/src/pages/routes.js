import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {} from "react";
import Main from "./Main";
import Profile from "./Profile";
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
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil no Github"
      }
    },
    ProfileProf: {
      screen: ProfileProf,
      navigationOptions: {
        title: "ProfileProf",
        headerShown: false
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

const Routes = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "Encontre seu professor"
    }
  },
  Config
});

export default createAppContainer(Routes);
