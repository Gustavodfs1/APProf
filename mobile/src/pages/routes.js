import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./Main";
import Profile from "./Profile";
import Intro from "./Intro";
import ProfileProf from "./ProfileProf";
import FormProf from "./FormProf";

const Routes = createAppContainer(
  createStackNavigator(
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
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Encontre seu professor"
        }
      },
      FormProf: {
        screen: FormProf,
        navigationOptions: {
          title: "FormProf",
          headerShown: false
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
  )
);

export default Routes;
