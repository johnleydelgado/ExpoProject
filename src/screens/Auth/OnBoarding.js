//import liraries
import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Text } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

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
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          source={images.bgImage}
          resizeMode="stretch">
          <Button backgroundColor="white" w="10" size="1" minHeight="1" mb={8} />
        </ImageBackground>
      </Center>
      <Center>
        <Button
          w="100%"
          variant="outline"
          borderRadius={0}
          backgroundColor="white"
          color="black"
          onPress={() => goToSignInHandler()}>
          <Text fontSize="sm" color="black">
            Sign to your account
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

//make this component available to the app
export default OnBoarding;
