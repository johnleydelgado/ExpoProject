//import liraries
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  Stagger,
  useDisclose,
} from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

import AlertC from '../../component/Common/Alert';
import CommonInput from '../../component/Inputs/CommonInput';

// create a component
const TestScreen = () => {
  return (
    <Box style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/005/507/698/original/simple-black-and-yellow-background-with-grunge-effect-abstract-yellow-and-black-background-for-banner-poster-flyer-or-wallpaper-vector.jpg',
        }}
        resizeMode="cover"
        style={styles.img}>
        {/* <AlertC title="Login successfully" status="success" name="login-success" />
      <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" /> */}
        <Center>
          <Input
            w={{
              base: '90%',
              md: '25%',
            }}
            backgroundColor="white"
            my={2}
            InputLeftElement={
              <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
            }
            placeholder="Name"
          />

          <Input
            w={{
              base: '90%',
              md: '25%',
            }}
            backgroundColor="white"
            my={2}
            InputLeftElement={
              <Icon as={<MaterialIcons name="house" />} size={5} ml="2" color="muted.400" />
            }
            placeholder="Address"
          />

          <Input
            w={{
              base: '90%',
              md: '25%',
            }}
            backgroundColor="white"
            my={2}
            InputLeftElement={
              <Icon as={<MaterialIcons name="contacts" />} size={5} ml="2" color="muted.400" />
            }
            keyboardType="numeric"
            placeholder="Contact Number"
          />

          <Input
            w={{
              base: '90%',
              md: '25%',
            }}
            backgroundColor="white"
            my={2}
            InputLeftElement={
              <Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />
            }
            placeholder="Email"
          />

          {/* Button */}
          <Button
            mt={4}
            w={{
              base: '90%',
              md: '25%',
            }}>
            Submit
          </Button>
        </Center>
        <Example />
      </ImageBackground>
    </Box>
  );
};

const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Center>
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack>
    </Center>
  );
};

// define your styles
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#2c3e50',
  //   },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
  inputColor: {
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default TestScreen;
