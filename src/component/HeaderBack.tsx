import {StyleSheet, Text, View} from 'react-native';
import React, {memo, ReactElement, useCallback} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNavigation} from '@react-navigation/native';
import {IC_BACK} from '../assets';

interface Props {
  title: string;
  right?: ReactElement;
}

export const HeaderBack = memo(function HeaderBack(props: Props) {
  const {title, right} = props;
  const navigation = useNavigation<any>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Container>
      <Left onPress={goBack}>
        <Icon source={IC_BACK} />
      </Left>
      <Center>
        <BannerText>{title}</BannerText>
      </Center>
      <Right>{right ? right : null}</Right>
    </Container>
  );
});

export default HeaderBack;

const styles = StyleSheet.create({});

const Container = styled.View`
  height: ${getStatusBarHeight() + 56}px;
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
  padding-right: 16px;
`;

const Icon = styled.Image`
  width: 10px;
  height: 20px;
  tint-color: #fff;
`;

const BannerText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;
