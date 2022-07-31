//import liraries
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';

// import React from 'react';

import images from '../../common/constant/images';
// create a component
const ProfileEditScreen = () => {
  const [service, setService] = React.useState('');

  const [date, setDate] = useState(new Date());
  const dateToday = date;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate !== dateToday;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <Box flex="1" bg="#E5E5E5">
      <Box marginTop="8%">
        <Center>
          <Image source={images.userImage} alt="Photo" height="100" rounded="full" width="100" />
          <HStack>
            <Box justifyContent="space-between" py="1" px="3">
              <VStack space="1">
                <Center>
                  <Text fontSize="md" color="#181D27" bold>
                    Itunuoluwa Abidoye
                  </Text>
                  <Text color="#ABABAB" fontSize="xs">
                    @Itunuoluwa
                  </Text>
                </Center>
              </VStack>
            </Box>
          </HStack>
        </Center>
      </Box>
      <Stack space={2} px={4} bg="#E5E5E5" flex="3" marginTop="8%">
        <Input size="lg" placeholder="What’s your first name?" variant="filled" />
        <Input size="lg" placeholder="And your last name?" variant="filled" />
        <Input
          InputLeftElement={<Icon as={<MaterialIcons name="local-phone" />} size={5} ml="2" />}
          placeholder="Phone number"
          size="lg"
          variant="filled"
        />
        <Select
          selectedValue={service}
          w="100%"
          accessibilityLabel="Select your gender"
          placeholder="Select your gender"
          _selectedItem={{
            // bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          _light={{
            bg: 'coolGray.100',
          }}
          _dark={{
            bg: 'coolGray.800',
          }}
          onValueChange={(itemValue) => setService(itemValue)}>
          <Select.Item label="Male" value="Male" />
          <Select.Item label="Female" value="Female" />
        </Select>
        <Box position="relative">
          <Input
            position="relative"
            w="100%"
            h="54px"
            mb={4}
            variant="unstyled"
            placeholder="What is your date of birth?"
            placeholderTextColor="#555555"
            fontSize={13}
            backgroundColor="#FFFFFF"
            isReadOnly
            // value={date.toLocaleString()}
            // value={moment(date).format('YYYY-MM-DD')}
            InputRightElement={
              <Box pr={5}>
                <AntDesign name="calendar" size={20} color="#398439" />
              </Box>
            }
            onPress={showDatepicker}
          />
        </Box>
        <Center>
          <Button
            w="80%"
            h="55"
            marginTop="10%"
            variant="outline"
            borderRadius={10}
            backgroundColor="#0601B4">
            <Text fontSize="sm" color="white">
              Update Profile
            </Text>
          </Button>
        </Center>
      </Stack>
    </Box>
  );
};

//make this component available to the app
export default ProfileEditScreen;
