//import liraries
import { Box, Center, Input, Stack, Text, Button } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { INVALID_ACCOUNT } from '../../common/constant/validationMessage';
import AlertC from '../../component/Common/Alert';

// create a component
const Test = () => {
  return (
    <Box safeAreaTop={10}>
      <AlertC title="Login successfully" status="success" name="login-success" />
      <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" />

      {/* Header text */}
      <Center px={2}>
        <Text bold fontSize="2xl" mb={5} style={styles.header}>
          Create Account
        </Text>
      </Center>

      <Stack mt={3} space={4} w="85%" maxW="300px" mx="auto">
        <Input size="md" variant="standard" placeholder="Username" style={styles.inputBorder} />
        <Input size="md" variant="standard" placeholder="Password" style={styles.inputBorder} />
        <Input size="md" variant="standard" placeholder="Email" style={styles.inputBorder} />
        <Input
          size="md"
          variant="standard"
          placeholder="Mobile"
          keyboardType="numeric"
          style={styles.inputBorder}
        />

        <Button key="md" size="md" shadow={2} style={styles.continue}>
          Continue
        </Button>
      </Stack>
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
  continue: {
    width: 300,
    marginTop: 10,
    backgroundColor: '#facd60',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#facd60',
  },
  header: {
    color: '#facd60',
  },
  inputBorder: {
    borderColor: '#facd60',
    borderRadius: 20,
    borderWidth: 2,
    padding: 5,
  },
});

//make this component available to the app
export default Test;
