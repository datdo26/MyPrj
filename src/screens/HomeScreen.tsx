import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React, { useCallback } from "react";
import styled from "styled-components/native";
import { HomeHeader } from "../component/HomeHeader";
import Banner from "../component/Banner";
import {
  IC_CALENDAR, IC_COMUNICATE,
  IC_DOCUMENT,
  IC_INFO,
  IC_LEARN, IC_LOGOUT, IC_MANAGE, IC_NOTE, IC_PROFILEDV, IC_QS,
  IC_REPORT,
  IMG_BANNER,
  IMG_BANNER2,
  IMG_BANNER3,
  IMG_CSVN
} from "../assets";
import { useNavigation } from "@react-navigation/native";

const dataBanner = [
  { id: "0", img: IMG_BANNER },
  { id: "1", img: IMG_BANNER2 },
  { id: "2", img: IMG_BANNER3 }
];

const HomeScreen = () => {
  const navigation = useNavigation<any>()
  const goToNew = useCallback(()=>{
    navigation.navigate('NewsScreen')
  },[])
  const goToReport = useCallback(()=>{
    navigation.navigate('ReportScreen')
  },[])
  const goToUserDetail = useCallback(()=>{
    navigation.navigate('UserDetailScreen')
  },[])
  return (
    <Container>
      <HomeHeader />
      <ScrollView>
        <Banner dataBanner={dataBanner} autoplay={true} />
        <ItemSection>
          <ItemContent>
            <ButtonItem>
              <Icon source={IC_INFO} />
              <ItemText>Thông tin{`\n`}chung</ItemText>
            </ButtonItem>
            <ButtonItem onPress={goToNew} >
              <Icon source={IC_DOCUMENT} />
              <ItemText>Tin tức{`\n`}sự kiện</ItemText>
            </ButtonItem>
            <ButtonItem>
              <Icon source={IC_CALENDAR} />
              <ItemText>Lịch{`\n`}công tác{`\n`}Đảng</ItemText>
            </ButtonItem>
          </ItemContent>
        </ItemSection>


        <ItemSection>
          <ItemContent>
            <ButtonItem>
              <Icon source={IC_LEARN} />
              <ItemText>Học tập{`\n`}theo{`\n`}Chuyên đề</ItemText>
            </ButtonItem>
            <ButtonItem>
              <Icon source={IC_COMUNICATE} />
              <ItemText>Liên lạc{`\n`}Nội bộ</ItemText>
            </ButtonItem>
            <ButtonItem onPress={goToUserDetail} >
              <Icon source={IC_PROFILEDV} />
              <ItemText>Hồ sơ{`\n`}cá nhân{`\n`}Đảng viên</ItemText>
            </ButtonItem>
          </ItemContent>
        </ItemSection>

        <ItemSection>
          <ItemContent>
            <ButtonItem>
              <Icon source={IC_DOCUMENT} />
              <ItemText>Văn kiện{`\n`}Đảng bộ</ItemText>
            </ButtonItem>
            <ButtonItem onPress={goToReport} >
              <Icon source={IC_REPORT} />
              <ItemText>Phản hồi{`\n`}Góp ý</ItemText>
            </ButtonItem>
            <ButtonItem>
              <Icon source={IC_MANAGE} />
              <ItemText>Quản trị{`\n`}công tác{`\n`}Đảng</ItemText>
            </ButtonItem>
          </ItemContent>
        </ItemSection>

        <ItemSection>
          <ItemContent>
            <ButtonItem>
              <Icon source={IC_NOTE} />
              <ItemText>Ghi chú</ItemText>
            </ButtonItem>
            <ButtonItem>
              <Icon source={IC_MANAGE} />
              <ItemText>Công việc{`\n`}cá nhân</ItemText>
            </ButtonItem>
            <ButtonItem>
              <Icon source={IC_QS} />
              <ItemText>Hỏi đáp</ItemText>
            </ButtonItem>
          </ItemContent>
        </ItemSection>

        <Button>
          <Icon source={IC_LOGOUT} />
          <LogoutText>Đăng xuất</LogoutText>
        </Button>

      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
`;

const ItemSection = styled.View`
  flex: 1`;

const ItemContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 0 16px;

`;

const Icon = styled.Image`
`;

const ButtonItem = styled.TouchableOpacity`
`;
const ItemText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #293649;
`;

const Button = styled.TouchableOpacity`
  width: 132px;
  height: 40px;
  background: #656E7C;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 16px;
`;

const LogoutText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-left: 16px;

`;

