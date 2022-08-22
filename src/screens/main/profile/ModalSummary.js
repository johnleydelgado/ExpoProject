//import liraries
import { Button, HStack, Modal, VStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ModalSummary = ({ showModal, setShowModal, data }) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
      <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Update profile</Modal.Header>
        <Modal.Body>
          <VStack space={3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">First name</Text>
              <Text color="blueGray.400">{data.firstName}</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Last name</Text>
              <Text color="blueGray.400">{data.lastName}</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Phone number</Text>
              <Text color="green.500">{data.phoneNumber}</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Gender</Text>
              <Text color="green.500">{data.gender}</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Birth Date</Text>
              <Text color="green.500">{data.birthDate}</Text>
            </HStack>
          </VStack>
        </Modal.Body>
        <Modal.Footer />
      </Modal.Content>
    </Modal>
  );
};

export default ModalSummary;
