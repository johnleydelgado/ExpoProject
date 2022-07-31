//import liraries
import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Text, Image } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const OnBoarding = () => {
  const navigation = useNavigation();
  const gotoSignInHandler = () => {
    navigation.navigate(MAIN.LOGIN);
  };
  return (
    <Box flex={1}>
      <Center style={{ flex: 1 }}>
        <Image source={images.bgImage} alt="bgimage" size="xl" w="100%" h="100%" />
      </Center>
      <Center>
        <Button
          w="100%"
          variant="outline"
          color="black"
          background="white"
          onPress={() => gotoSignInHandler()}>
          <Text fontSize="sm" color="black">
            Sign to your account
          </Text>
        </Button>
      </Center>
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
export default OnBoarding;
