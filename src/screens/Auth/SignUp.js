//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { Box, Center, Text, Icon, Button, Stack, Input, FormControl } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

import images from '../../common/constant/images';

// create a component
const SignUp = () => {
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
          Register
        </Text>
        <Text fontSize="16" fontWeight="400" mt={-2} Top="232" Left="30" color="#888888">
          Create your account
        </Text>

        <FormControl w="98%" mt="7">
          <FormControl.Label fontSize="14" fontWeight="400" color="#888888">
            Your Name
          </FormControl.Label>
          <Input placeholder="Enter Name" />
        </FormControl>

        <FormControl w="98%" mt="3">
          <FormControl.Label fontSize="14" fontWeight="400" color="#888888">
            Your Email
          </FormControl.Label>
          <Input placeholder="Enter email" />
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
          />
        </FormControl>
      </Stack>
      <Center backgroundColor="#FFFFFF">
        <Text fontSize="14" mb="6" fontWeight="700" color="#121515">
          I have an account
        </Text>
      </Center>
      <Center>
        <Button w="100%" variant="outline" borderRadius={0} backgroundColor="#19A54A">
          <Text fontSize="sm" color="white">
            Register
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

//make this component available to the app
export default SignUp;
