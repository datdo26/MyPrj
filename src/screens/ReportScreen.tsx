import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import Headers from '../component/Headers';
import InputInfo from '../component/InputInfo';
import {
  IC_ADD,
  IC_EMAIL,
  IC_FILE,
  IC_PEOPLE,
  IC_PHONE_DARK,
  IC_PROFIlE,
  IC_QUESTION,
} from '../assets';
import CheckBox from '@react-native-community/checkbox';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderBack from '../component/HeaderBack';
const width = Dimensions.get('window').width;

const ReportScreen = () => {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <Container>
      <HeaderBack title={'Danh mục Phản hồi Góp ý'} />
      <WrapInputInfo>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_PROFIlE} />
            <Text>Họ và tên</Text>
          </InputInfoTitle>
          <InputInfo
            title={'Nguyen Huy Trung'}
            value={''}
            keyName={'name'}
            onChangeValue={() => {}}
          />
        </InputInfoItem>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_PHONE_DARK} />
            <Text>Số điện thoại</Text>
          </InputInfoTitle>
          <InputInfo
            title={'0123456789'}
            value={''}
            keyName={'name'}
            onChangeValue={() => {}}
          />
        </InputInfoItem>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_EMAIL} />
            <Text>Email</Text>
          </InputInfoTitle>
          <InputInfo
            title={'huytrung3390@gmail.com'}
            value={''}
            keyName={'name'}
            onChangeValue={() => {}}
          />
        </InputInfoItem>
        <SelectBoxItem>
          <SelectBoxContent>
            <Text>Phản hồi</Text>
            <CheckBox
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={newValue => setToggleCheckBox1(newValue)}
              style={{marginHorizontal: 16}}
            />
          </SelectBoxContent>
          <SelectBoxContent>
            <Text>Góp ý</Text>
            <CheckBox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={newValue => setToggleCheckBox2(newValue)}
              style={{marginHorizontal: 16}}
            />
          </SelectBoxContent>
        </SelectBoxItem>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_QUESTION} />
            <Text>Câu hỏi</Text>
          </InputInfoTitle>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText={'Câu hỏi riêng ▼ '}
          />
        </InputInfoItem>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_PEOPLE} />
            <Text>Chọn cấp:</Text>
          </InputInfoTitle>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText={'Đảng bộ tỉnh ▼ '}
          />
        </InputInfoItem>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_PEOPLE} />
            <Text>Nội dung:</Text>
          </InputInfoTitle>
        </InputInfoItem>
        <View>
          <TextInput
            style={{width: width - 32, height: 148, backgroundColor: '#f9f9f9'}}
            multiline
            placeholder={'Nội dung'}
          />
        </View>
        <InputInfoItem>
          <InputInfoTitle>
            <IconImage source={IC_FILE} />
            <Text>Tệp đính kèm:</Text>
          </InputInfoTitle>
          <TouchableOpacity>
            <IconImage source={IC_ADD} />
          </TouchableOpacity>
        </InputInfoItem>
      </WrapInputInfo>
    </Container>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 16,
  },
});

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

const WrapInputInfo = styled.View`
  justify-content: center;
  align-items: center;
`;

const InputInfoItem = styled.View`
  height: 48px;
  align-items: center;
  background-color: #f2f2f2;
  flex-direction: row;
  justify-content: space-between;
  width: ${width - 32}px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 16px;
`;

const SelectBoxItem = styled.View`
  height: 48px;
  background-color: #f2f2f2;
  flex-direction: row;
  width: ${width - 32}px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 16px;
  justify-content: space-around;
`;

const SelectBoxContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconImage = styled.Image`
  margin: 0 16px;
`;

const InputInfoTitle = styled.View`
  flex-direction: row;
`;
