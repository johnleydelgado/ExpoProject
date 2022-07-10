//import liraries
import { FormControl, Input, Stack, WarningOutlineIcon, Text, Box } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// create a component
const CommonInput = ({
  isRequired = false,
  title,
  placeholder,
  variant,
  onChange,
  error,
  leftIcon,
  rightIcon,
  ...otherProps
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={error}>
      <Stack mx="4">
        {title && <FormControl.Label>{title}</FormControl.Label>}
        <Input
          fontWeight="400"
          fontFamily="body"
          variant={variant}
          placeholder={placeholder}
          placeholderTextColor="#A6A6A6"
          onChangeText={onChange}
          InputLeftElement={leftIcon}
          InputRightElement={rightIcon}
          {...otherProps}
        />
        {error && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            <Box pt={2}>
              <Text color="red.400" fontWeight="500" fontFamily="body" fontSize={12}>
                {error}
              </Text>
            </Box>
          </FormControl.ErrorMessage>
        )}
        {/* <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText> */}
      </Stack>
    </FormControl>
  );
};

CommonInput.prototypes = {
  isRequire: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  leftIcon: PropTypes.element,
};

//make this component available to the app
export default CommonInput;
