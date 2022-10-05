import "../_mockLocation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../Components/Map";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
