import react from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import AccountScreen from "./src/Screens/AccountScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
export default createAppContainer(switchNavigator);
