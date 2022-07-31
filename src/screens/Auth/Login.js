//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, Text, Icon, Button, Stack, Input, FormControl } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (value, type) => {
    console.log(value, type);
    if (type === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const saveHandler = () => {
    if (email === 'a' && password === 'a') {
      alert('Login Success!');
      navigation.navigate(MAIN.DASHBOARD);
    } else if (email === '' || password === '') {
      alert('Please fill up all fields!');
    } else {
      alert('Wrong Email or Password!');
    }
  };

  const goToRegistration = () => {
    navigation.navigate(MAIN.SIGN_UP);
  };

  const [show, setShow] = React.useState(false);
  return (
    <Box flex="1">
      <Center style={{ flex: 1 }}>
        <ImageBackground
          source={images.bgImage}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Button backgroundColor="white" w="10" size="2" mb={8} />
        </ImageBackground>
      </Center>
      <Stack space={2} px={4} backgroundColor="#FFFFFF" flex="3">
        <Text fontSize="24" fontWeight="700" pt={4} Top="190" Left="30">
          Login
        </Text>
        <Text fontSize="16" fontWeight="400" mt={-2} Top="232" Left="30" color="#888888">
          Sign to your account
        </Text>

        <FormControl w="98%" mt="7">
          <FormControl.Label fontSize="14" fontWeight="400" color="#888888">
            Your Email
          </FormControl.Label>
          <Input
            placeholder="Enter email"
            onChangeText={(value) => onChangeHandler(value, 'email')}
          />
        </FormControl>

        <FormControl w="98%" mt="3">
          <FormControl.Label fontSize="14" fontWeight="400" color="#888888">
            Password
          </FormControl.Label>
          {/* <Input placeholder="Enter password" /> */}
          <Input
            w={{
              base: '100%',
              md: '25%',
            }}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Icon
                as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={() => setShow(!show)}
              />
            }
            placeholder="Password"
            onChangeText={(value) => onChangeHandler(value, 'password')}
          />
        </FormControl>

        {/* <Button w="100%" backgroundColor="white" borderRadius="0" borderColor="transparent"> */}
        <Text fontSize="14" mt="5" fontWeight="700" color="#121515">
          Forgot Password?
        </Text>
        {/* </Button> */}
      </Stack>
      <Center backgroundColor="#FFFFFF">
        <Text
          fontSize="14"
          mb="6"
          fontWeight="700"
          color="#121515"
          onPress={() => goToRegistration()}>
          I don’t have account?
        </Text>
      </Center>
      <Center>
        <Button
          w="100%"
          variant="outline"
          borderRadius={0}
          backgroundColor="#19A54A"
          onPress={() => saveHandler()}>
          <Text fontSize="sm" color="white">
            Sign to your account
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

//make this component available to the app
export default Login;
