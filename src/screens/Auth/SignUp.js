//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Box, Center, Text, Icon, Button, Input, Stack } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';

import images from '../../common/constant/images';

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
      // dispatch(RESET_ALERT());
      // navigation.navigate(MAIN.TEST);
      // if (values.email === 'johnley@gmail.com' && values.password === '0000') {
      //   dispatch(OPEN_ALERT('login-success'));
      //   navigation.navigate(MAIN.TEST);
      // } else {
      //   dispatch(OPEN_ALERT('invalid-account'));
      // }
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
    if (email === 'johnley@gmail.com' && password === '0000') {
      dispatch(OPEN_ALERT('login-success'));
    } else {
      dispatch(OPEN_ALERT('invalid-account'));
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Box flex="1">
      <Center flex="1">
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          source={images.bgImage}>
          <Button
            alignSelf="start"
            variant="ghost"
            _text={{ color: 'white' }}
            leftIcon={
              <Icon
                as={<MaterialIcons name="chevron-left" />}
                size="6"
                color="white"
                fontWeight="bold"
              />
            }
            onPress={() => goBack()}>
            Back
          </Button>
          <Button backgroundColor="white" w="10" size="1" minHeight="1" mb={4} />
        </ImageBackground>
      </Center>
      <Stack space={2} px={4} backgroundColor="#FFFFFF" flex="5">
        <Text fontSize="24" fontWeight="700" pt={2}>
          Register
        </Text>
        <Text fontSize="16" fontWeight="400" color="#888888">
          Create your account
        </Text>

        <Box pt={4} />
        {/* Inputs */}
        <Text fontSize="14" fontWeight="200" color="#888888" fontFamily="body">
          YOUR NAME
        </Text>
        <Input
          placeholder="john doe"
          variant="unstyled"
          backgroundColor="#F9FAFB"
          h="40px"
          borderRadius={0}
          onChangeText={(value) => onChangeHandler(value, 'name')}
        />
        <Text fontSize="14" fontWeight="200" color="#888888" fontFamily="body">
          YOUR EMAIL
        </Text>
        <Input
          placeholder="johndoe@sample.com"
          variant="unstyled"
          backgroundColor="#F9FAFB"
          h="40px"
          borderRadius={0}
          onChangeText={(value) => onChangeHandler(value, 'email')}
        />
        <Text fontSize="14" fontWeight="200" color="#888888" fontFamily="body">
          PASSWORD
        </Text>
        <Input
          placeholder="********"
          variant="unstyled"
          backgroundColor="#F9FAFB"
          secureTextEntry={isPassword}
          h="40px"
          borderRadius={0}
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
      <Center flex="1" backgroundColor="#FFFFFF">
        <Button
          variant="ghost"
          _text={{
            fontSize: 16,
            fontWeight: 500,
            color: '#121515',
            fontFamily: 'body',
          }}>
          I have account
        </Button>
        <Button
          w="100%"
          variant="outline"
          borderRadius={0}
          backgroundColor="#19A54A"
          color="black"
          _text={{ fontSize: 16, fontWeight: 500, color: 'white', fontFamily: 'body' }}
          onPress={() => saveHandler()}>
          Login
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
    //       // isRequired
    //       my={2}
    //       leftIcon={
    //         <Icon as={<MaterialIcons name="email" />} size={4} ml="2" color="#A6A6A6" mx={2} />
    //       }
    //       // {...formikProps('email')}
    //     />
    //     <CommonInput
    //       variant="underlined"
    //       placeholder="password"
    //       // isRequired
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
    //       // {...formikProps('password')}
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
