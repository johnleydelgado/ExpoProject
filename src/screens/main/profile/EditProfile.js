//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  Avatar,
  Box,
  Center,
  HStack,
  ScrollView,
  VStack,
  Text,
  Input,
  Select,
  CheckIcon,
  Button,
  Actionsheet,
  Icon,
  Flex,
  Pressable,
} from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

// create a component
const EditProfile = () => {
  const [service, setService] = React.useState('');
  const [isDateOpen, setIsDateOpen] = React.useState('');

  return (
    <Box flex="1" safeAreaTop={16}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center p={4} paddingTop="1/6">
          <VStack space={2} alignItems="center" paddingBottom={12}>
            <Avatar
              source={{
                uri: 'https://i.pinimg.com/originals/31/70/9d/31709dcee837245c047e076ef851e8aa.jpg',
              }}
              borderColor="rgba(6, 1, 180, 0.1)"
              borderWidth={4}
              size={16}
              marginBottom="4"
            />
            <Text color="black" fontSize="14" fontWeight="500" fontFamily="body">
              Lisa Manoban
            </Text>
            <Text color="#ABABAB" fontSize="14" fontWeight="300" fontFamily="body">
              @testusername
            </Text>
          </VStack>

          <VStack space={6} alignItems="center" w="full">
            <TextInput
              style={styles.textfieldStyle}
              placeholder="Whats your first name?"
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.textfieldStyle}
              placeholder="And your last name?"
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.textfieldStyle}
              placeholder="Phone number"
              placeholderTextColor="black"
            />
            <Select
              selectedValue={service}
              w="full"
              accessibilityLabel="Select your gender"
              placeholder="Select your gender"
              placeholderTextColor="black"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              height={54}
              backgroundColor="white"
              onValueChange={(itemValue) => setService(itemValue)}>
              <Select.Item label="Male" value="male" />
              <Select.Item label="Female" value="female" />
            </Select>
            {/* <Button
              variant="outline"
              backgroundColor="white"
              w="full"
              height={54}
              justifyContent="space-between"
              _text={{
                color: '#121515',
                fontFamily: 'body',
              }}
              _stack={{ justifyContent: 'flex-end', alignItems: 'flex' }}
              rightIcon={
                <Icon as={<MaterialIcons name="calendar-today" />} size={6} color="blue.400" />
              }
              onPress={() => setIsDateOpen(!isDateOpen)}>
              What is your date of birth?
            </Button> */}
            <Pressable onPress={() => setIsDateOpen(!isDateOpen)} w="full">
              <Box
                height={54}
                backgroundColor="white"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                style={styles.textfieldStyle}>
                <Text> What is your date of birth?</Text>
                <Icon as={<MaterialIcons name="calendar-today" />} size={6} color="blue.400" />
              </Box>
            </Pressable>
            <Button
              width={260}
              height={55}
              borderRadius={15}
              backgroundColor="#0601B4"
              onPress={() => console.log('test')}>
              Update Profile
            </Button>
          </VStack>
        </Center>
      </ScrollView>

      {Platform.OS === 'android' ? (
        isDateOpen && <RNDateTimePicker value={new Date()} />
      ) : (
        <Actionsheet isOpen={isDateOpen} onClose={() => setIsDateOpen(false)}>
          <Actionsheet.Content>
            <Box w="100%" px={4} justifyContent="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: 'gray.300',
                }}>
                Please select a date
              </Text>
              <RNDateTimePicker value={new Date()} />
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      )}
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  textfieldStyle: {
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 54,
  },
});

//make this component available to the app
export default EditProfile;
