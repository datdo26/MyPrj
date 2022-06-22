import { Dimensions, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React, {memo, ReactElement} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { IC_CONGSAN, IMG_AVTHeader } from "../assets";


const width = Dimensions.get('window').width

export const HomeHeader = memo(function HomeHeader() {

  return (
    <Container>
      <Left>
        <Avatar source={IMG_AVTHeader} />
        <BannerSection>
          <BannerName>Nguyễn Huy Trung</BannerName>
          <BannerRole>Chức vụ: Bí thư</BannerRole>
          <BannerPoint>Điểm tích luỹ: 100</BannerPoint>
        </BannerSection>
      </Left>
      <Right>
        <Icon source={IC_CONGSAN} />
      </Right>
    </Container>
  );
});

const styles = StyleSheet.create({});

const Container = styled.View`
  height: ${getStatusBarHeight() + 68}px;
  background-color: #e6492d;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
`;

const Left = styled.TouchableOpacity`
  width: ${width - 72}px;
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

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
`;
const Icon = styled.Image`
  width: 56px;
  height: 56px;
`;

const BannerSection = styled.View`
flex-direction: column;
  margin-left: 16px;
`

const BannerName = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BannerRole = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFF6F1;
`;

const BannerPoint = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFF6F1;
`;

const BtnAdd = styled.TouchableOpacity`
  margin: 0 10px;
`;
