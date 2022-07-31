//import liraries
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Center,
  HStack,
  Image,
  NativeBaseProvider,
  VStack,
  Text,
  IconButton,
  ScrollView,
  Switch,
} from 'native-base';
import React, { Component } from 'react';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';
// create a component
const Profile = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Box bg="#E5E5E5" width="100%" height="100%">
        <ScrollView maxW="100%">
          <Box>
            <Text fontSize="lg" color="black" my="3" px="3" bold>
              Profile
            </Text>
          </Box>
          <Center>
            <Box bg="#0601B4" py="4" px="3" borderRadius="5" rounded="md" width="95%">
              <HStack>
                <Image
                  source={images.userImage}
                  alt="Photo"
                  height="53"
                  rounded="full"
                  width="53"
                />
                <Box justifyContent="space-between" py="1" px="3">
                  <VStack space="1">
                    <Text fontSize="md" color="white" bold>
                      Itunuoluwa Abidoye
                    </Text>
                    <Text color="white" fontSize="xs">
                      @Itunuoluwa
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'pencil-outline',
                    color: 'white',
                  }}
                  onPress={() => navigation.navigate(MAIN.PROFILE)}
                />
              </HStack>
            </Box>

            <Box bg="white" width="95%" my="6" py="3" px="3" borderRadius="5">
              <HStack my="3">
                <Image source={images.userIcon} alt="Photo" height="45" rounded="full" width="45" />
                <Box justifyContent="space-between" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      My Account
                    </Text>
                    <Text color="#ABABAB" fontSize="xs">
                      Make changes to your account
                    </Text>
                  </VStack>
                </Box>
                <Box marginTop="4" marginLeft="3">
                  <FontAwesome name="exclamation-triangle" size={20} color="red" />
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>

              <HStack my="3">
                <Image source={images.userIcon} alt="Photo" height="45" rounded="full" width="45" />
                <Box justifyContent="space-between" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      Saved Beneficiary
                    </Text>
                    <Text color="#ABABAB" fontSize="xs">
                      Manage your saved account
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>

              <HStack my="3">
                <Image source={images.lockIcon} alt="Photo" height="45" rounded="full" width="45" />
                <Box justifyContent="space-between" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      Face ID / Touch ID
                    </Text>
                    <Text color="#ABABAB" fontSize="xs">
                      Manage your device security
                    </Text>
                  </VStack>
                </Box>
                <Switch position="absolute" right="0" size="sm" />
              </HStack>

              <HStack my="3">
                <Image
                  source={images.shieldIcon}
                  alt="Photo"
                  height="45"
                  rounded="full"
                  width="45"
                />
                <Box justifyContent="space-between" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      Two-Factor Authentication
                    </Text>
                    <Text color="#ABABAB" fontSize="xs">
                      Further secure your account for safety
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>

              <HStack my="3">
                <Image source={images.exitIcon} alt="Photo" height="45" rounded="full" width="45" />
                <Box justifyContent="space-between" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      Log out
                    </Text>
                    <Text color="#ABABAB" fontSize="xs">
                      Further secure your account for safety
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>
            </Box>
          </Center>
          <Box>
            <Text fontSize="lg" color="black" px="3">
              More
            </Text>
          </Box>
          <Center>
            <Box bg="white" width="95%" my="3" py="3" px="3" borderRadius="5">
              <HStack my="3">
                <Image source={images.bellIcon} alt="Photo" height="45" rounded="full" width="45" />
                <Box justifyContent="space-between" my="3" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      Help & Support
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>

              <HStack my="3">
                <Image
                  source={images.heartIcon}
                  alt="Photo"
                  height="45"
                  rounded="full"
                  width="45"
                />
                <Box justifyContent="space-between" my="3" px="3">
                  <VStack space="1">
                    <Text fontSize="sm" color="black" bold>
                      About App
                    </Text>
                  </VStack>
                </Box>
                <IconButton
                  position="absolute"
                  right="0"
                  size="lg"
                  variant="ghost"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'chevron-right',
                    color: 'black',
                  }}
                />
              </HStack>
            </Box>
          </Center>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

//make this component available to the app
export default Profile;
