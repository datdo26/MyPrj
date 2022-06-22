import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ReportScreen from '../screens/ReportScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import NewsScreen from '../screens/NewsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  NewsScreen: undefined;
  HomeScreen: undefined;
  UserDetailScreen: undefined;
  ReportScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={'NewsScreen'}
          component={NewsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ReportScreen'}
          component={ReportScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'UserDetailScreen'}
          component={UserDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
