import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignUpScreen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to mainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
