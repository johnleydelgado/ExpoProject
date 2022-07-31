/* eslint-disable import/no-duplicates */
//import liraries
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icons from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  Box,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MAIN, STACKS } from '../../../common/constant/screens';
const CardComponent = ({ title, subtitle, other, icon, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <HStack space={2}>
      <Box
        style={{
          backgroundColor: 'rgba(6, 1, 180, 0.05)',
          padding: 12,
          borderRadius: 100,
        }}>
        {icon}
      </Box>
      <VStack justifyContent="center">
        <Text color="black" fontSize="14" fontWeight="500" fontFamily="body">
          {title}
        </Text>
        {subtitle && (
          <Text color="#ABABAB" fontSize="14" fontWeight="300" fontFamily="body">
            {subtitle}
          </Text>
        )}
      </VStack>
      {other}
    </HStack>
  </TouchableOpacity>
);

// create a component
const Profile = () => {
  const navigation = useNavigation();

  const myAccount = (
    <Box flex="1" flexDirection="row">
      <Box flex="2" justifyContent="center" alignItems="flex-end">
        <MaterialIcons name="error" size={24} color="#EC5865" style={{ paddingLeft: 18 }} />
      </Box>
      <Box flex="1" justifyContent="center" alignItems="flex-end">
        <Entypo name="chevron-small-right" size={24} color="black" />
      </Box>
    </Box>
  );

  const common = (
    <Box flex="1" justifyContent="center" alignItems="flex-end">
      <Entypo name="chevron-small-right" size={24} color="black" />
    </Box>
  );

  const faceId = (
    <Box flex="1" justifyContent="center" alignItems="flex-end">
      <Switch />
    </Box>
  );

  const settings = [
    {
      key: 1,
      title: 'My account',
      subtitle: 'Make changes to your account',
      other: myAccount,
      icon: <Ionicons name="person-outline" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
    {
      key: 2,
      title: 'Saved Beneficiary',
      subtitle: 'Manage your saved account',
      other: common,
      icon: <Ionicons name="person-outline" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
    {
      key: 3,
      title: 'Face ID / Touch ID',
      subtitle: 'Manage your device security',
      other: faceId,
      icon: <Icons name="lock" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
    {
      key: 4,
      title: 'Two-Factor Authentication',
      subtitle: 'Further secure your account for safety',
      other: common,
      icon: <MaterialIcons name="security" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
    {
      key: 5,
      title: 'Logout',
      subtitle: 'Further secure your account for safety',
      other: common,
      icon: <MaterialIcons name="logout" size={22} color="#0601B4" />,
      onPress: () => navigation.reset({ routes: [{ name: MAIN.LOGIN }] }),
    },
  ];

  const more = [
    {
      key: 6,
      title: 'Help & Support',
      other: common,
      icon: <Icons name="bell" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
    {
      key: 7,
      title: 'About App',
      other: common,
      icon: <AntDesign name="hearto" size={22} color="#0601B4" />,
      onPress: () => console.log('test'),
    },
  ];

  const editProfile = () => {
    navigation.navigate(STACKS.EDIT_PROFILE);
  };

  return (
    <Box flex="1" safeAreaTop={8}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={8} p={4}>
          <Heading>Profile</Heading>
          {/* PROFILE CARD */}
          <Box style={styles.card}>
            <HStack space={2} w="100%">
              <Avatar
                source={{
                  uri: 'https://i.pinimg.com/originals/31/70/9d/31709dcee837245c047e076ef851e8aa.jpg',
                }}
                borderColor="white"
                borderWidth={2}
              />
              <VStack>
                <Text color="white" fontSize="14" fontWeight="500" fontFamily="body">
                  Lisa Manoban
                </Text>
                <Text color="white" fontSize="14" fontWeight="300" fontFamily="body">
                  @testusername
                </Text>
              </VStack>
              <Box alignItems="flex-end" flex="1">
                <IconButton
                  onPress={editProfile}
                  icon={<Icons size={22} color="white" name="edit-2" />}
                  borderRadius="full"
                  _pressed={{ bg: 'coolGray.700' }}
                />
              </Box>
            </HStack>
          </Box>

          {/* SETTINGS */}
          <Box style={styles.cardSetting} w="full">
            <VStack space={8} flex="1" paddingY={6} paddingX={2}>
              {settings.map((items) => (
                <CardComponent {...items} />
              ))}
            </VStack>
          </Box>

          {/* MORE */}
          <Heading>More</Heading>
          <Box style={styles.cardSetting} w="full">
            <VStack space={8} flex="1" paddingY={6} paddingX={2}>
              {more.map((items) => (
                <CardComponent {...items} key={items.key} />
              ))}
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#0601B4',
    padding: 12,
    borderRadius: 6,
    paddingVertical: 18,
  },
  cardSetting: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
  },
});

//make this component available to the app
export default Profile;
