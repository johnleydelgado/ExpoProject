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
const SignUp = () => {
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

  const goBack = () => {
    navigation.goBack();
  };

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

  const gotoLogin = () => {
    navigation.navigate(MAIN.LOGIN);
  };

  const onSaveHandler = () => {
    if (email === '' || password === '') {
      alert('email or password is empty');
    } else {
      alert('success');
    }
  };

  return (
    <Box flex={1}>
      <Center style={{ flex: 1 }}>
        {/* <Image source={images.bgImage} alt="bgimage" size="xl" w="100%" h="100%" /> */}
        <ImageBackground
          style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}
          source={images.bgImage}>
          <Text top="-50" fontSize="15" color="white" onPress={() => goBack()}>
            go back
          </Text>
          <Stack height="80%" backgroundColor="#FFFFFF" px="8%" pt="12%">
            <Text fontSize="24" fontWeight="700">
              Register
            </Text>
            <Text color="#888888" fontSize="16" font-fontWeight="400">
              Create your account
            </Text>
            <Stack pt="15%">
              <Text
                color="#888888"
                fontSize="14"
                fontWeight="400"
                letterSpacing="0.1em"
                pb="1.5"
                textTransform="uppercase">
                Your Name
              </Text>
              <Input
                mb="5"
                placeholder="Jose Rizal"
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
                Email
              </Text>
              <Input
                mb="5"
                placeholder="Email"
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
            <Stack left="37%" position="absolute" bottom={0} mb="4">
              <Text fontSize="16" fontWeight="700" onPress={() => gotoLogin()}>
                I have an account
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
                Register
              </Text>
            </Button>
          </Center>
        </ImageBackground>
      </Center>
    </Box>
  );
};

//make this component available to the app
export default SignUp;
