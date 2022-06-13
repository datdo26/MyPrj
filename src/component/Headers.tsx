import {Dimensions, View, StyleSheet, Platform} from 'react-native';
// @ts-ignore
import React from 'react';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;
const Headers = ({title}: any) => {
  return (
    <Container style={styles.headerHeight}>
      <View>
        <Title style={styles.text}>{title}</Title>
      </View>
    </Container>
  );
};

export default Headers;

const styles = StyleSheet.create({
  headerHeight: {
    ...Platform.select({
      android: {
        padding: 20,
      },
      ios: {
        padding: 20,
      },
    }),
  },
  text: {
    ...Platform.select({
      ios: {
        marginTop: 26,
      },
    }),
  },
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
