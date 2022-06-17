import { Dimensions, View, StyleSheet, Platform, TouchableOpacity } from "react-native";
// @ts-ignore
import React, { useCallback } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const Headers = ({ title }: any) => {

  const navigation = useNavigation<any>()

  const goBack = useCallback(()=>{
    navigation.goBack()
  }, [])

  return (
    <Container style={styles.headerHeight}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{marginRight:10}} onPress={goBack} >
          <Icon name="caret-back-outline" size={20} color={"#fff"} style={{marginTop: 26}} />
        </TouchableOpacity>
        <View>
          <Title style={styles.text}>{title}</Title>
        </View>
      </View>
    </Container>
  );
};

export default Headers;

const styles = StyleSheet.create({
  headerHeight: {
    ...Platform.select({
      android: {
        padding: 20
      },
      ios: {
        padding: 20
      }
    })
  },
  text: {
    ...Platform.select({
      ios: {
        marginTop: 26
      }
    })
  }
});

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #e6492d;
  width: ${width}px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
