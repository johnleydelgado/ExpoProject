//import liraries
import {
  MaterialIcons,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import {
  Box,
  Center,
  Text,
  Icon,
  Button,
  Image,
  Stack,
  Input,
  HStack,
  Switch,
  ScrollView,
  VStack,
  View,
} from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const Profile = () => {
  const navigation = useNavigation();

  const goToEditProfile = () => {
    navigation.navigate(MAIN.EDIT_PROFILE);
  };
  return (
    <Box flex="1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Center style={{ flex: 4 }} backgroundColor="#E5E5E5">
          <Box width="93%" height="80%" bg="#19A64A" p="7" borderRadius={6} shadow={2} px={7}>
            <HStack space={3} justifyContent="center" alignItems="center" mt={-2}>
              <Center>
                <Image source={images.userImage} alt="Alternate Text" style={styles.image} />
              </Center>
              <Box w="190">
                <Text color="white" fontWeight="bold">
                  Lorem Ipsum Dolor
                </Text>
                <Text color="white">@loremipsum</Text>
              </Box>
              <Center>
                <Icon
                  as={<MaterialIcons name="edit" />}
                  size={6}
                  color="white"
                  onPress={() => goToEditProfile()}
                />
              </Center>
            </HStack>
          </Box>
        </Center>
        <Center style={{ flex: 10 }} backgroundColor="#E5E5E5">
          <Box width="93%" height="100%" bg="white" py={2} borderRadius={6} shadow={2} px={3}>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="md-person-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="180">
                <Text color="#181D27" fontWeight="bold">
                  My Account
                </Text>
                <Text color="#ABABAB" fontSize="12">
                  Make changes to your account
                </Text>
              </Box>
              <Center>
                <Icon as={<MaterialIcons name="error" />} size={5} color="#EC5865" />
              </Center>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="person-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  Saved Beneficiary
                </Text>
                <Text color="#ABABAB" fontSize="12">
                  Manage your saved account
                </Text>
              </Box>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="lock-closed-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  Face ID / Touch ID
                </Text>
                <Text color="#ABABAB" fontSize="12">
                  Manage your device security
                </Text>
              </Box>
              <Center>
                <Switch size="6" />
              </Center>
            </HStack>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="shield-checkmark-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  Two-Factor Authentication
                </Text>
                <Text color="#ABABAB" fontSize="12">
                  Further secure your account for safety
                </Text>
              </Box>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="log-out-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  Logout
                </Text>
                <Text color="#ABABAB" fontSize="12">
                  Logout your account
                </Text>
              </Box>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
          </Box>
        </Center>
        <View style={{ flex: 1 }} backgroundColor="#E5E5E5" px={4} pt={3} pb={4}>
          <Text color="#181D27" fontWeight="bold" fontSize="16">
            More
          </Text>
        </View>
        <Center style={{ flex: 3 }} backgroundColor="#E5E5E5" mt={-2} pb={3}>
          <Box width="93%" height="97%" bg="white" py={2} borderRadius={6} shadow={2} px={7}>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="notifications-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  Help and Support
                </Text>
              </Box>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
            <HStack space={3} justifyContent="center" alignItems="center" p="2">
              <Center borderRadius="50" backgroundColor="#E5E5E5" p="3">
                <Icon as={<Ionicons name="heart-outline" />} size={6} color="#19A64A" />
              </Center>
              <Box w="210">
                <Text color="#181D27" fontWeight="bold">
                  About App
                </Text>
              </Box>
              <Center>
                <Icon as={<Ionicons name="md-chevron-forward" />} size={6} color="#ABABAB" />
              </Center>
            </HStack>
          </Box>
        </Center>
      </ScrollView>
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    width: 68,
    height: 68,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
});

//make this component available to the app
export default Profile;
