//import liraries
import { useNavigation } from '@react-navigation/native';
import { Image, Box, Center, Button, Text } from 'native-base';
import React, { Component } from 'react';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const OnBoarding = () => {
  const navigation = useNavigation();
  const goToSignInHandler = () => {
    navigation.navigate(MAIN.LOGIN);
  };
  return (
    <Box flex="1">
      <Center style={{ flex: 1 }}>
        <Image source={images.bgImage} alt="Alternate Text" />
      </Center>
      <Center>
        <Button w="10" backgroundColor="white" size="1" minHeight="1" mb={4} />

        <Button
          w="100%"
          variant="outline"
          backgroundColor="white"
          borderRadius={0}
          padding="4"
          onPress={() => goToSignInHandler()}>
          <Text fontSize="sm" color="black">
            Sign to you account
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

//make this component available to the app
export default OnBoarding;
