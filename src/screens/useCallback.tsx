import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UseCallback = () => {
  // function number(num1, num2, ...numOther) {
  //   console.log('x:', num1);
  //   console.log('y:', num2);
  //   console.log('Other number:', numOther);
  // }
  // number('one', 'two', 'three', 'four', 'five', 'six');
  function sumNumbers(message, ...numbers) {
    let total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    console.log(message, total);
  }

  sumNumbers('Tổng là: ', 2, 3);
  sumNumbers('Giá trị của tổng là: ', 2, 3, 100);
  return (
    <SafeAreaView>
      <Text>useCallback</Text>
    </SafeAreaView>
  );
};

export default UseCallback;

const styles = StyleSheet.create({});
