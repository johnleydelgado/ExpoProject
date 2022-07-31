//import liraries
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Flex, VStack, Box, Image, Text, Button } from 'native-base';
import React, { useState } from 'react';
// eslint-disable-next-line import/namespace
import { StyleSheet } from 'react-native';

import images from '../../common/constant/images';
import { MAIN } from '../../common/constant/screens';

// create a component
const Profile = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const navigation = useNavigation();
  const onClickHandler = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <ScrollView px={2}>
      <VStack my={4} px={2} space={4} alignItems="center">
        <Box
          w="100%"
          h="auto"
          bg="indigo.300"
          borderRadius={5}
          backgroundColor="#398439"
          shadow={9}
          p={5}
          py={4}>
          <Flex direction="row" alignItems="center">
            <Box p={0} rounded="full" overflow="hidden" borderColor="#FFFFFF" borderWidth={1.5}>
              <Image source={images.userImage} alt="userimage" size="xl" w="53px" h="53px" />
            </Box>
            <Box px={3} py={2} h="100%" flex={5}>
              <Text color="white" fontSize="14px" fontWeight={700} flex={1}>
                Ritche Padro
              </Text>
              <Text color="white" fontSize="11px" fontWeight={400} flex={1}>
                @ucancallmepapa-p
              </Text>
            </Box>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={26}
              color="white"
              onPress={() => {
                navigation.navigate(MAIN.TEST);
              }}
            />
          </Flex>
        </Box>
        <Box
          w="100%"
          h="auto"
          bg="indigo.300"
          borderRadius={5}
          backgroundColor="#FFFFFF"
          px={4}
          pt={6}
          pb={1}>
          {/* item 1 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box w="40px" flexDirection="row" alignItems="center" h="40px" position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  opacity="0.4"
                  color="#398439"
                />
              </Box>
            </Box>
            <Box px={3} h="100%" flex={5}>
              <Text color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
                My Account
              </Text>
              <Text color="#ABABAB" fontSize="11px" fontWeight={400} flex={1}>
                Make changes to your account
              </Text>
            </Box>
            <Box
              flex={1}
              style={{
                transform: [{ rotate: '6deg' }],
              }}>
              <Entypo name="warning" size={16} color="#EC5865" />
            </Box>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>

          {/* item 2 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  opacity="0.4"
                  color="#398439"
                />
              </Box>
            </Box>
            <Box px={3} h="100%" flex={7}>
              <Text color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
                Saved Beneficiary
              </Text>
              <Text color="#ABABAB" fontSize="11px" fontWeight={400} flex={1}>
                Manage your saved account
              </Text>
            </Box>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>

          {/* item 3 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={24}
                  opacity="0.4"
                  color="#398439"
                />
              </Box>
            </Box>
            <Box px={3} h="100%" flex={7}>
              <Text color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
                Face ID / Touch ID
              </Text>
              <Text color="#ABABAB" fontSize="11px" fontWeight={400} flex={1}>
                Manage your device security
              </Text>
            </Box>
            <Button
              outlineColor="transparent"
              p={0}
              backgroundColor="transparent"
              onPress={() => setToggleButton(!toggleButton)}>
              <Flex
                direction={toggleButton ? 'row' : 'row-reverse'}
                w="51px"
                p={1}
                borderRadius="60px"
                backgroundColor={toggleButton ? '#E8E8E8' : '#398439'}>
                <Box
                  w="20px"
                  h="20px"
                  borderRadius="10px"
                  backgroundColor={toggleButton ? '#FFFFFF' : '#FFFFFF'}
                />
              </Flex>
            </Button>
          </Flex>

          {/* item 4 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={24}
                  opacity="0.4"
                  color="#398439"
                />
              </Box>
            </Box>
            <Box px={3} h="100%" flex={7}>
              <Text color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
                Two-Factor Authentication
              </Text>
              <Text color="#ABABAB" fontSize="11px" fontWeight={400} flex={1}>
                Further secure your account for safety
              </Text>
            </Box>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>

          {/* item 5 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <Ionicons name="log-out-outline" size={24} opacity="0.4" color="#398439" />
              </Box>
            </Box>
            <Box px={3} h="100%" flex={7}>
              <Text color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
                Log out
              </Text>
              <Text color="#ABABAB" fontSize="11px" fontWeight={400} flex={1}>
                Further secure your account for safety
              </Text>
            </Box>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>
        </Box>

        <Box w="100%">
          <Text color="#181D27" fontSize="14px" fontStyle="normal" fontWeight="500">
            More
          </Text>
        </Box>

        <Box
          w="100%"
          h="auto"
          bg="indigo.300"
          borderRadius={5}
          backgroundColor="#FFFFFF"
          px={4}
          pt={5}>
          {/* item 1 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <Ionicons name="help" size={24} opacity="0.4" color="#398439" />
              </Box>
            </Box>
            <Text px={3} color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
              Help & Support
            </Text>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>

          {/* item 2 */}
          <Flex direction="row" mb={5} alignItems="center">
            <Box
              p={0}
              w="40px"
              flexDirection="row"
              alignItems="center"
              h="40px"
              position="relative">
              <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity={0.1}
                backgroundColor="#398439"
                rounded="full"
              />
              <Box position="absolute" left={2}>
                <Ionicons name="information-outline" size={24} opacity="0.4" color="#398439" />
              </Box>
            </Box>
            <Text px={3} color="#181D27" fontSize="13px" fontWeight={700} flex={1}>
              About App
            </Text>
            <Entypo name="chevron-right" size={24} color="#ABABAB" />
          </Flex>
        </Box>
      </VStack>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  textStyle: {
    color: '#FFFFFF',
  },
  primaryColor: {
    color: '#398439',
  },
});

//make this component available to the app
export default Profile;
