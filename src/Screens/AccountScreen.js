import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>AccountScreen</Text>
      <Button title="Sign out" onPress={signout} />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
