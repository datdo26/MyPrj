import { Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import React from 'react';
import Headers from '../component/Headers';
import styled from 'styled-components/native';
import { IMG_BANNER, IMG_OVAL } from "../assets";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('window').width;

const HomeScreen = () => {

  const navigation = useNavigation<any>()

  return (
    <Container>
      <StatusBar hidden={false} />
      <Headers title="Tin tức sự kiện" />
      <ScrollView>
        <WrapSection>
          <WrapContent>
            <ContentHeader>
              <Image source={IMG_OVAL} />
              <MainContentHeader>
                <Title>Nghị quyết TW</Title>
                <Date>21-08-2019</Date>
              </MainContentHeader>
            </ContentHeader>
            <ContentSection>
              <BannerSection>
                <Banner source={IMG_BANNER} />
              </BannerSection>
              <MainContent>
                <View>
                  <ContentTitle>
                    Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khóa
                    XII…
                  </ContentTitle>
                  <Content>
                    Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng
                    tới dự và phát biểu chỉ đạo Hội nghị…
                  </Content>
                </View>
              </MainContent>
            </ContentSection>
          </WrapContent>

          <WrapContent>
            <ContentHeader>
              <Image source={IMG_OVAL} />
              <MainContentHeader>
                <Title>Điều lệ Đảng</Title>
                <Date>21-08-2019</Date>
              </MainContentHeader>
            </ContentHeader>
            <ContentSection>
              <BannerSection>
                <Banner source={IMG_BANNER} />
              </BannerSection>
              <MainContent>
                <ContentTitle>
                  Hướng dẫn xác định nguồn kinh phí thực hiện chính sách tinh
                  giảm...
                </ContentTitle>
                <Content>
                  Ngày 05/06/2019, Bộ Tài chính vừa ban hành Thông tư số
                  31/2019/TT-BTC hưỡng dẫn việc xác định...
                </Content>
              </MainContent>
            </ContentSection>
          </WrapContent>

        </WrapSection>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:32}} >
        <TouchableOpacity style={{width: 100, height: 60, backgroundColor:'#0068FF', alignItems:'center', justifyContent:'center', borderRadius: 15}} onPress={()=> navigation.navigate('UserDetail')} >
          <Text>
            Go to UserDetail
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, height: 60, backgroundColor:'#0068FF', alignItems:'center', justifyContent:'center', borderRadius: 15}} onPress={()=> navigation.navigate('Report')} >
          <Text>
            Go to Report
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const WrapSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const WrapContent = styled.View`
  width: ${width - 20}px;
  height: 448px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-top: 16px;
`;

const ContentHeader = styled.View`
  flex-direction: row;
  margin: 10px 12px;
`;

const MainContentHeader = styled.View`
  margin-left: 16px;
`;

const ContentSection = styled.View`
  background-color: #fff;
  height: 370px;
  margin: 0 12px;
  align-self: center;
  border-radius: 10px;
`;

const BannerSection = styled.View`
  align-items: center;
`;

const Banner = styled.Image`
  width: ${width - 30}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 2px;
`;

const MainContent = styled.View`
  height: 130px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #293649;
`;

const Date = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #4b5563;
`;

const ContentTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #293649;
  margin: 8px 12px;
`;

const Content = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #4b5563;
  margin: 0 12px;
`;
