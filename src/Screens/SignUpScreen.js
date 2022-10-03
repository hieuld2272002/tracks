import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(state);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
  link: {
    color: "blue",
  },
});
