//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

// create a component
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text text30>Text goes here</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  textStyle: {},
});

//make this component available to the app
export default Profile;
