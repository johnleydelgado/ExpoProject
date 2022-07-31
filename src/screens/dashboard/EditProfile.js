import {
  MaterialIcons,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import {
  Box,
  Center,
  Text,
  Icon,
  Button,
  Image,
  Stack,
  Input,
  HStack,
  Switch,
  ScrollView,
  VStack,
  View,
  Select,
  FormControl,
  DatePicker,
} from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const EditProfileScreen = () => {
  return (
    <Box flex="1" background="#E5E5E5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Center style={{ flex: 3 }}>
          <Text fontSize="17" fontWeight="bold">
            Bio-data
          </Text>
          <Image source={images.userImage} alt="Alternate Text" style={styles.image} mt={8} />
          <Text color="#181D27" fontWeight="bold" fontSize={16}>
            Lorem Ipsum Dolor
          </Text>
          <Text color="#ABABAB">loremipsum@gmail.com</Text>
        </Center>
        <Stack space={4} px={4} flex="2">
          <FormControl w="100%" maxW="400px">
            <Input
              variant="unstyled"
              backgroundColor="#F9FAFB"
              placeholder="What is your first name?"
              padding="4"
              fontSize="14"
              borderRadius={5}
              shadow={2}
            />
          </FormControl>
          <FormControl w="100%" maxW="400px">
            <Input
              variant="unstyled"
              backgroundColor="#F9FAFB"
              placeholder="What is your last name?"
              padding="4"
              fontSize="14"
              borderRadius={5}
              shadow={2}
            />
          </FormControl>
          <FormControl w="100%" maxW="400px">
            <Input
              variant="unstyled"
              backgroundColor="#F9FAFB"
              placeholder="What is your phone number?"
              padding="4"
              fontSize="14"
              borderRadius={5}
              shadow={2}
            />
          </FormControl>
          <FormControl w="100%" maxW="400px">
            <Select
              variant="unstyled"
              backgroundColor="#F9FAFB"
              placeholder="What is your gender?"
              padding="4"
              fontSize="14"
              borderRadius={5}
              shadow={2}>
              <Select.Item label="Male" value="male" />
              <Select.Item label="Female" value="female" />
            </Select>
          </FormControl>
          <FormControl w="100%" maxW="400px">
            <Input
              variant="unstyled"
              backgroundColor="#F9FAFB"
              placeholder="What is your birthdate?"
              padding="4"
              fontSize="14"
              borderRadius={5}
              shadow={2}
            />
          </FormControl>
          <Button
            w="100%"
            variant="unstyled"
            backgroundColor="#19A64A"
            borderRadius={10}
            padding="4"
            mt={5}>
            <Text fontSize="sm" color="white">
              Update Profile
            </Text>
          </Button>
        </Stack>
      </ScrollView>
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
});

//make this component available to the app
export default EditProfileScreen;
