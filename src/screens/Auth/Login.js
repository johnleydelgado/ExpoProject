//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { Box, Center, Text, Icon, Button } from 'native-base';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginInitialValue,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(RESET_ALERT());
      if (values.email === 'johnley@gmail.com' && values.password === '0000') {
        dispatch(OPEN_ALERT('login-success'));
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

  return (
    <Box safeAreaTop={8}>
      <AlertC title="Login successfully" status="success" name="login-success" />
      <AlertC title={INVALID_ACCOUNT} status="error" name="invalid-account" />

      {/* Header text */}
      <Center px={2}>
        <Text fontWeight="100" fontFamily="body" fontSize={28} color="#000">
          Login
        </Text>
        <Box>
          <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
            By signing in you are agreeing
          </Text>
          <Text fontWeight="100" fontFamily="body" fontSize={14} style={{ textAlign: 'center' }}>
            our Term and privacy policy
          </Text>
        </Box>
      </Center>

      {/* Inputs */}
      <Box width="100%" mx="auto" pt={2}>
        <CommonInput
          variant="underlined"
          placeholder="Email Address"
          isRequired
          my={2}
          leftIcon={
            <Icon as={<MaterialIcons name="email" />} size={4} ml="2" color="#A6A6A6" mx={2} />
          }
          {...formikProps('email')}
        />
        <CommonInput
          variant="underlined"
          placeholder="password"
          isRequired
          secureTextEntry={isPassword}
          my={2}
          leftIcon={
            <Icon as={<MaterialIcons name="lock" />} size={4} ml="2" color="#A6A6A6" mx={2} />
          }
          rightIcon={
            <Icon
              as={<MaterialIcons name="visibility" />}
              size={4}
              ml="2"
              color="#A6A6A6"
              mx={2}
              onPress={() => setIsPassword(!isPassword)}
            />
          }
          {...formikProps('password')}
        />

        {/* Button */}
        <Button mt={4} onPress={formik.handleSubmit} mx={4}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

//make this component available to the app
export default Login;
