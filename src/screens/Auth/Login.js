//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Box, Center, Text, Icon, Button, Image, Stack, Input } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';

import images from '../../common/constant/images';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   Pressable,
//   TextInput,
// } from "react-native";

import { MAIN } from '../../common/constant/screens';
import { INVALID_ACCOUNT } from '../../common/constant/validationMessage';
import { loginInitialValue, loginSchema } from '../../common/formik/users';
import AlertC from '../../component/Common/Alert';
import CommonInput from '../../component/Inputs/CommonInput';
import { OPEN_ALERT, RESET_ALERT } from '../../redux/common';

// create a component
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginInitialValue,
    // validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(RESET_ALERT());
      if (values.email === 'johnley@gmail.com' && values.password === '0000') {
        dispatch(OPEN_ALERT('login-success'));
        navigation.navigate(MAIN.TEST);
      } else {
        navigation.navigate(MAIN.TEST);
      }
    },
  });

  const formikProps = (field) => {
    return {
      onChange: formik.handleChange(field),
      onBlur: formik.handleBlur(field),
      value: formik.values[field],
      error: formik.touched[field] && formik.errors[field] ? formik.errors[field] : null,
    };
  };

  const onChangeHandler = (value, type) => {
    console.log(value, type);
    if (type === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSaveHandler = () => {
    // if (email === '' || password === '') {
      alert('success');
      navigation.navigate(MAIN.DASHBOARD);
    // } else {
    //   alert('email or password is empty');
    // }
  };

  const gotoSignUp = () => {
    navigation.navigate(MAIN.SIGN_UP);
  };

  return (
    <Box flex={1}>
      <Center style={{ flex: 1 }}>
        {/* <Image source={images.bgImage} alt="bgimage" size="xl" w="100%" h="100%" /> */}
        <ImageBackground
          style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}
          source={images.bgImage}>
          <Stack height="80%" backgroundColor="#FFFFFF" px="8%" pt="12%" position="relative">
            <Text fontSize="24" fontWeight="700">
              Login
            </Text>
            <Text color="#888888" fontSize="16" font-fontWeight="400">
              Sign to your account
            </Text>
            <Stack pt="15%">
              <Text
                color="#888888"
                fontSize="14"
                fontWeight="400"
                letterSpacing="0.1em"
                pb="1.5"
                textTransform="uppercase">
                Your Email
              </Text>
              <Input
                mb="5"
                placeholder="ilovechilis@gmai.com"
                borderColor="transparent"
                backgroundColor="#F9FAFB"
                onChangeText={(e) => onChangeHandler(e, 'email')}
              />
              <Text
                color="#888888"
                fontSize="14"
                fontWeight="400"
                letterSpacing="0.1em"
                pb="1.5"
                textTransform="uppercase">
                Password
              </Text>
              <Input
                pb="2"
                placeholder="******"
                borderColor="transparent"
                backgroundColor="#F9FAFB"
                type="password"
                secureTextEntry
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name="visibility-off" />}
                    size={6}
                    color="#1A1E1E"
                    mx={2}
                  />
                }
                onChangeText={(e) => onChangeHandler(e, 'password')}
              />
            </Stack>
            <Text mt="5" fontSize="16" fontWeight="700" onPress={() => gotoSignUp()}>
              Forgot Password?
            </Text>
            <Stack left="33%" position="absolute" bottom={0} mb="4">
              <Text fontSize="16" fontWeight="700" onPress={() => gotoSignUp()}>
                I don’t have account
              </Text>
            </Stack>
          </Stack>
          <Center>
            <Button
              w="100%"
              variant="outline"
              borderColor="transparent"
              borderRadius="0"
              color="black"
              background="#19A54A"
              onPress={() => onSaveHandler()}>
              <Text fontSize="sm" color="#FFFFFF">
                Login
              </Text>
            </Button>
          </Center>
        </ImageBackground>
      </Center>
    </Box>
  );

  // return (
  //   <Box safeAreaTop={8}>
  //     <AlertC title="Login successfully" status="success" name="login-success" />
  //     <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" />

  //     {/* Header text */}
  //     <Center px={2}>
  //       <Text fontWeight="100" fontFamily="body" fontSize={28} color="#000">
  //         Login
  //       </Text>
  //       <Box>
  //         <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
  //           By signing in you are agreeing
  //         </Text>
  //         <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
  //           our Term and privacy policy
  //         </Text>
  //       </Box>
  //     </Center>

  //     {/* Inputs */}
  //     <Box width="100%" mx="auto" pt={2}>
  //       <CommonInput
  //         variant="underlined"
  //         placeholder="Email Address"
  //         isRequired
  //         my={2}
  //         leftIcon={
  //           <Icon as={<MaterialIcons name="email" />} size={4} ml="2" color="#A6A6A6" mx={2} />
  //         }
  //         {...formikProps('email')}
  //       />
  //       <CommonInput
  //         variant="underlined"
  //         placeholder="password"
  //         isRequired
  //         secureTextEntry={isPassword}
  //         my={2}
  //         leftIcon={
  //           <Icon as={<MaterialIcons name="lock" />} size={4} ml="2" color="#A6A6A6" mx={2} />
  //         }
  //         rightIcon={
  //           <Icon
  //             as={<MaterialIcons name="visibility" />}
  //             size={4}
  //             ml="2"
  //             color="#A6A6A6"
  //             mx={2}
  //             onPress={() => setIsPassword(!isPassword)}
  //           />
  //         }
  //         {...formikProps('password')}
  //       />

  //       {/* Button */}
  //       <Button mt={4} onPress={formik.handleSubmit} mx={4}>
  //         Submit
  //       </Button>
  //     </Box>
  //   </Box>
  // );
};

//make this component available to the app
export default Login;
