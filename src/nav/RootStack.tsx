import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserDetailScreen from '../screens/useRef';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useEffect from '../screens/useEffect';
import useCallback from '../screens/useCallback';
import UseMemo from '../screens/useMemo';
import UseRef from '../screens/useRef';

export type RootStackParamList = {
  UseCallback: undefined;
  UseEffect: undefined;
  UseMemo: undefined;
  UseRef: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'UseEffect'}
          component={useEffect}
          options={{headerShown: false}}
        />
        a
        <Stack.Screen
          name={'UseCallback'}
          component={useCallback}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'UseMemo'}
          component={UseMemo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'UseRef'}
          component={UseRef}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
