import {StyleSheet, Text, View} from 'react-native';
import React, {memo, ReactElement} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

interface Props {
  title?: string;
  right?: ReactElement;
  left?: ReactElement;
}

export const NormalHeader = memo(function NormalHeader(props: Props) {
  const {title, right, left} = props;

  return (
    <Container>
      <Left>{left ? left : null}</Left>
      <Center>
        <BannerText>{title || 'Project'}</BannerText>
      </Center>
      <Right>{right ? right : null}</Right>
    </Container>
  );
});

const styles = StyleSheet.create({});

const Container = styled.View`
  height: ${getStatusBarHeight() + 45}px;
  background-color: #e6492d;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
`;

const Left = styled.TouchableOpacity`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Right = styled.View`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #fff;
`;
const IconBell = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: #fff;
`;
const BannerText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: 500;
`;

const BtnAdd = styled.TouchableOpacity`
  margin: 0 10px;
`;
