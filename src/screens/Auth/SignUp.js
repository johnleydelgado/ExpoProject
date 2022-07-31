//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Box, Center, Text, Icon, Button, Image, Stack, Input } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   Pressable,
//   TextInput,
// } from "react-native";

import { INVALID_ACCOUNT } from '../../common/constant/validationMessage';
import { loginInitialValue, loginSchema } from '../../common/formik/users';
import AlertC from '../../component/Common/Alert';
import CommonInput from '../../component/Inputs/CommonInput';
import { OPEN_ALERT, RESET_ALERT } from '../../redux/common';

// create a component
const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginInitialValue,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(RESET_ALERT());
      if (values.email === 'johnley@gmail.com' && values.password === '0000') {
        dispatch(OPEN_ALERT('login-success'));
        navigation.navigate(MAIN.TEST);
      } else {
        dispatch(OPEN_ALERT('invalid-account'));
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
    if (type === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const saveHandler = () => {
    if (email === '' || password === '') {
      alert('Email or password is empty!');
    } else {
      alert('Success!');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Box flex="1">
      <Center style={{ flex: 1 }}>
        <ImageBackground
          source={images.bgImage}
          alt="Alternate Text"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Button w="10" backgroundColor="white" size="1" minHeight="1" mb={4} />
        </ImageBackground>
      </Center>
      <Stack space={2} backgroundColor="white" px={7} flex="4">
        <Text fontSize={24} fontWeight={700} pt={10} color="#121515">
          Register
        </Text>
        <Text fontSize={16} fontWeight={300} color="#888888" mt={-1}>
          Create your account
        </Text>
        <Box pt={12} />
        <Text fontSize={12} fontWeight={300} color="#888888" letterSpacing={2}>
          YOUR NAME
        </Text>
        <Input
          variant="unstyled"
          backgroundColor="#F9FAFB"
          placeholder="James Patrick Diwa"
          fontWeight="600"
          padding="3"
          fontSize="14"
          borderRadius={0}
          onChangeText={(value) => onChangeHandler(value, 'email')}
        />
        <Box pt={5} />
        <Text fontSize={12} fontWeight={300} color="#888888" letterSpacing={2}>
          YOUR EMAIL
        </Text>
        <Input
          variant="unstyled"
          backgroundColor="#F9FAFB"
          placeholder="jamesdiwa05@gmail.com"
          fontWeight="600"
          padding="3"
          fontSize="14"
          borderRadius={0}
          onChangeText={(value) => onChangeHandler(value, 'email')}
        />
        <Box pt={5} />
        <Text fontSize={12} fontWeight={300} color="#888888" letterSpacing={2}>
          PASSWORD
        </Text>
        <Input
          variant="unstyled"
          backgroundColor="#F9FAFB"
          placeholder="**********"
          fontWeight="600"
          padding="3"
          fontSize="14"
          borderRadius={0}
          secureTextEntry={isPassword}
          InputRightElement={
            <Icon
              as={<MaterialIcons name="visibility" />}
              size={4}
              color="#A6A6A6"
              mx={2}
              onPress={() => setIsPassword(!isPassword)}
            />
          }
          onChangeText={(value) => onChangeHandler(value, 'password')}
        />
      </Stack>
      <Center flex="1" backgroundColor="white">
        <Button
          color="black"
          backgroundColor="white"
          variant="unstyled"
          justifyContent="flex-start"
          mt={8}
          mb={-4}
          onPress={() => goBack()}>
          <Text fontWeight="800" fontSize="14">
            I already have an account
          </Text>
        </Button>
        <Button
          w="100%"
          variant="unstyled"
          backgroundColor="#19A64A"
          borderRadius={0}
          padding="4"
          mt={5}
          onPress={() => saveHandler()}>
          <Text fontSize="sm" color="white">
            Register
          </Text>
        </Button>
      </Center>
    </Box>
    // <Box safeAreaTop={8}>
    //   <AlertC title="Login successfully" status="success" name="login-success" />
    //   <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" />

    //   {/* Header text */}
    //   <Center px={2}>
    //     <Text fontWeight="100" fontFamily="body" fontSize={28} color="#000">
    //       Login
    //     </Text>
    //     <Box>
    //       <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
    //         By signing in you are agreeing
    //       </Text>
    //       <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
    //         our Term and privacy policy
    //       </Text>
    //     </Box>
    //   </Center>

    //   {/* Inputs */}
    //   <Box width="100%" mx="auto" pt={2}>
    //     <CommonInput
    //       variant="underlined"
    //       placeholder="Email Address"
    //       isRequired
    //       my={2}
    //       leftIcon={
    //         <Icon as={<MaterialIcons name="email" />} size={4} ml="2" color="#A6A6A6" mx={2} />
    //       }
    //       {...formikProps('email')}
    //     />
    //     <CommonInput
    //       variant="underlined"
    //       placeholder="password"
    //       isRequired
    //       secureTextEntry={isPassword}
    //       my={2}
    //       leftIcon={
    //         <Icon as={<MaterialIcons name="lock" />} size={4} ml="2" color="#A6A6A6" mx={2} />
    //       }
    //       rightIcon={
    //         <Icon
    //           as={<MaterialIcons name="visibility" />}
    //           size={4}
    //           ml="2"
    //           color="#A6A6A6"
    //           mx={2}
    //           onPress={() => setIsPassword(!isPassword)}
    //         />
    //       }
    //       {...formikProps('password')}
    //     />

    //     {/* Button */}
    //     <Button mt={4} onPress={formik.handleSubmit} mx={4}>
    //       Submit
    //     </Button>
    //   </Box>
    // </Box>
  );
};

//make this component available to the app
export default SignUp;
