import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import React, {useState} from 'react';
import styled from 'styled-components/native';
import { IC_MSG, IC_PEOPLE, IC_SEARCH, IMG_AVT1, IMG_AVT2 } from "../assets";
import Headers from "../component/Headers";

const width = Dimensions.get('window').width;

const data = [
  {
    id: 1,
    avt: IMG_AVT1,
    name: 'NGUYỄN HUY TRUNG',
    dob: '15-02-1967',
    email: 'huytrung2290@gmail.com',
    phone: '0123456789',
    homeTown: 'Thái Bình',
    residence: 'Thành phố Thái Bình',
  },
  {
    id: 2,
    avt: IMG_AVT2,
    name: 'PHÙNG HOÀI NAM',
    dob: '18-01-1979',
    email: 'hoainam123@gmail.com',
    phone: '0123456789',
    homeTown: 'Thái Bình',
    residence: 'Kiến Xương - Thái Bình',
  },
  {
    id: 3,
    avt: IMG_AVT2,
    name: 'ĐỖ THỊ HÀ THANH',
    dob: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phone: '0123456789',
    homeTown: 'Thái Bình',
    residence: 'Thành phố Thái Bình',
  },
];

const UserDetailScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            marginTop: 16,
          }}>
          <Image source={item.avt} style={{marginLeft: 16, marginTop: 13}} />
          <View style={{marginLeft: 10}}>
            <Name style={{marginTop: 16}}>{item.name}</Name>
            <View style={{flexDirection: 'row'}}>
              <Field>Ngày sinh: </Field>
              <FieldContent>{item.dob}</FieldContent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Field>Email: </Field>
              <FieldContent>{item.email}</FieldContent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Field>Số điện thoại: </Field>
              <FieldContent>{item.phone}</FieldContent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Field>Quê quán: </Field>
              <FieldContent>{item.homeTown}</FieldContent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Field>Nơi cư trú: </Field>
              <FieldContent>{item.residence}</FieldContent>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{
              width: 132,
              height: 32,
              backgroundColor: '#44820B',
              borderRadius: 5,
              justifyContent: 'center',
              marginTop: 12,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Bí thư
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_PEOPLE} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_MSG} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      <Headers title={'Danh sách Đảng Viên'} />
      <SearchSection>
        <SearchIcon source={IC_SEARCH} />
        <SearchInput
          placeholder={'Tìm kiếm đảng viên'}
          placeholderTextColor="black"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </SearchSection>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          data={data.filter(result =>
            result.name.toLowerCase().includes(searchText.toLowerCase()),
          )}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

const SearchSection = styled.View`
  background-color: #fff;
  border-radius: 6px;
  flex-direction: row;
  height: 48px;
  align-items: center;
  margin: 4px 10px 9px;
  opacity: 0.5;
`;
const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 9px;
  margin-right: 11px;
`;

const SearchInput = styled.TextInput`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12px;
  flex: auto;
`;

const Name = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #293649;
`;

const Field = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #4b5563;
`;

const FieldContent = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #293649;
`;
