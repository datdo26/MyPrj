import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import RootStack from './src/nav/RootStack';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  // function applyDiscount(price, discount: number = 0.05): number {
  //   return price * (1 - discount);
  // }

  // console.log(applyDiscount(100)); // 95

  // function getTotal(...numbers: number[]): number {
  //   let total = 0;
  //   numbers.forEach(num => (total += num));
  //   return total;
  // }

  // console.log(getTotal()); // 0
  // console.log(getTotal(10, 20)); // 30
  // console.log(getTotal(10, 20, 30)); // 60

  // function handleTimeout(timeout) {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(resolve, timeout);
  //   });
  // }

  // var xxx = handleTimeout(5000);
  // xxx
  //   .then(function () {
  //     console.log('LẬP');
  //   })
  //   .then(function () {
  //     return handleTimeout(3000);
  //   })
  //   .then(function () {
  //     console.log('TRÌNH');
  //   })
  //   .then(function () {
  //     return handleTimeout(1000);
  //   })
  //   .then(function () {
  //     console.log('JAVASCRIPT');
  //   });

  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
