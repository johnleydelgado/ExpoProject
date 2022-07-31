//import liraries
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { View, Box, Button, Flex, Text, Image, Input, Select, CheckIcon, InputGroup, InputRightAddon } from 'native-base';
import React, { useState } from 'react';
// eslint-disable-next-line import/namespace
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import images from '../../common/constant/images';

// create a component
const Test = () => {
  const [date, setDate] = useState(new Date());
  // const dateToday = date;

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
    <View style={styles.container}>
      <Box alignItems="center" flex={1} px={5}>
        <Box position="relative">
          <Image
            source={images.userImage}
            alt="userimage"
            size="xl"
            w="72px"
            h="72px"
            top={2.9}
            left={2.9}
            borderRadius={50}
            position="absolute"
          />
          <Box
            p={0}
            rounded="full"
            overflow="hidden"
            w={78}
            h={78}
            backgroundColor="#0601B4"
            opacity={0.15}
          />
        </Box>
        <Flex alignItems="center" pt={5} pb={7}>
          <Text fontWeight={700} fontSize="16px">
            Ritche Padro
          </Text>
          <Text fontSize="13px" color="#ABABAB">
            ritche@ucancallmepapa-p
          </Text>
        </Flex>
        <Input
          h="54px"
          mb={4}
          variant="unstyled"
          placeholder="What’s your first name?"
          placeholderTextColor="#555555"
          fontSize={13}
          backgroundColor="#FFFFFF"
        />
        <Input
          h="54px"
          mb={4}
          variant="unstyled"
          placeholder="And your last name?"
          placeholderTextColor="#555555"
          fontSize={13}
          backgroundColor="#FFFFFF"
        />
        <Input
          h="54px"
          mb={4}
          variant="unstyled"
          placeholder="Phone number"
          placeholderTextColor="#555555"
          fontSize={13}
          backgroundColor="#FFFFFF"
        />
        <Select
          w="100%"
          h={54}
          fontSize={13}
          accessibilityLabel="Choose Service"
          placeholder="Select your gender"
          placeholderTextColor="#555555"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          backgroundColor="#FFFFFF"
          mb={2}>
          <Select.Item label="Male" value="male" />
          <Select.Item label="female" value="female" />
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
              <Button
                pr={5}
                outlineColor="transparent"
                p={0}
                backgroundColor="transparent"
                onPress={showDatepicker}>
                <AntDesign name="calendar" size={20} color="#398439" />
              </Button>
            }
          />
        </Box>
        <Button w="259.82px" h="55px" backgroundColor="#0601B4" borderRadius={15}>
          Update Profile
        </Button>
      </Box>
      {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {moment(date).format('YYYY-MM-DD')}</Text> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  input: {
    placeholderTextColor: '#555555',
    fontSize: 13,
  },
});

//make this component available to the app
export default Test;
