import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { Context } from "../context/AuthContext";
const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        SubmitButtonText="Signup"
      />
      <NavLink
        routeName="Signup"
        text="Dont have an account ? sign up instead"
      />
    </View>
  );
};
SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 250,
    justifyContent: "center",
  },
});
