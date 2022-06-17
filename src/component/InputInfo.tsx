import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import React, { useCallback } from "react";
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TextInputProps {
  title: string;
  keyName: string;
  onChangeValue: (keyName: string, value: string) => void;
}
const InputInfo = (props: Props) => {
  const {title, keyName, onChangeValue, ...restProps} = props;

  const onChangeText = useCallback((value: string) => {
    onChangeValue(keyName, value);
  },[onChangeValue, keyName])

  return (
    <InputValue
      {...restProps}
      placeholder={title}
      onChangeText={onChangeText}
      placeholderTextColor={'gray'}
    />
  );
};

export default InputInfo;

const styles = StyleSheet.create({});

const InputValue = styled.TextInput`
margin-right:  16px`;
