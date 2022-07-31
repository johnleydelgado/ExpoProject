//import liraries
import {
  Alert,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Slide,
  Stack,
  Text,
  VStack,
} from 'native-base';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CLOSE_ALERT } from '../../redux/common';

// create a component
const AlertC = ({ status, title = '', name }) => {
  const { openAlerts } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openAlerts.includes(name)) {
      setInterval(() => {
        dispatch(CLOSE_ALERT(name));
      }, 5000);
    }
  }, [openAlerts]);

  return (
    <Slide
      in={openAlerts.includes(name)}
      placement="top"
      duration={400}
      justifyContent="flex-start">
      <Center>
        <Stack space={3} w="100%" maxW="400">
          <Alert w="100%" status={status}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon />
                <Text fontSize="sm" fontFamily="body" fontWeight="500" color="coolGray.800">
                  {title}
                </Text>
              </HStack>
            </VStack>
          </Alert>
        </Stack>
      </Center>
    </Slide>
  );
};

AlertC.prototypes = {
  isOpen: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

//make this component available to the app
export default AlertC;
