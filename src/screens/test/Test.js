//import liraries
import { Box, Button, Center, Input } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { INVALID_ACCOUNT } from '../../common/constant/validationMessage';
import AlertC from '../../component/Common/Alert';
import CommonInput from '../../component/Inputs/CommonInput';

// create a component
const Test = () => {
  return (
    <Box safeAreaTop={8}>
      <AlertC title="Login successfully" status="success" name="login-success" />
      <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" />

      {/* Header text */}
      <Center px={2}>
        <Text fontWeight="100" fontFamily="body" fontSize={28} color="#000">
          Sign Up
        </Text>
      </Center>

      {/* Inputs */}
      <Box width="100%" mx="auto" pt={2} px={2}>
        <Input
          variant="outline"
          placeholder="full name"
          mb={2}
          backgroundColor="white"
          style={{
            shadowColor: 'yellow',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 1,
            shadowRadius: 10.32,
            elevation: 16,
          }}
        />
        <Input variant="outline" placeholder="email" mb={2} />
        <Input variant="outline" placeholder="phone number" mb={2} keyboardType="numeric" />
        <Input variant="outline" placeholder="gender" mb={2} />
        {/* Button */}
        <Button mt={4} mx={4}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Test;
