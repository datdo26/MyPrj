import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import UserDetailScreen from "../screens/UserDetailScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  UserDetailScreen:undefined;
  ReportScreen:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()



const RootStack = () => {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name={'Report'} component={ReportScreen} options={{headerShown:false}}/>
      <Stack.Screen name={'UserDetail'} component={UserDetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootStack

const styles = StyleSheet.create({})
