//import liraries
import Icons from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
} from "react-native";

import { MAIN } from "../../common/constant/screens";

// create a component
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", width: "80%" }}>
        <Text style={{ fontSize: 32 }}>Login</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
          placeholder="email"
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={{
            backgroundColor: "white",
            marginTop: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
          placeholder="password"
          secureTextEntry
          // onChangeText={onChangeText}
          // value={text}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(MAIN.SIGN_UP)}
        >
          <Icons name="airplay" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Go to signup</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(MAIN.DASHBOARD)}
        >
          <Icons name="airplay" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    marginTop: 16,
  },
});

//make this component available to the app
export default Login;
