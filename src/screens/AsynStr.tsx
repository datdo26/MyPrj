import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
// @ts-ignore
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {decrement, increment} from '../store/ducks/counter';
const axios = require('axios').default;

const AsynStr = () => {
  // cách 1:
  function getJSON() {
    // To make the function blocking we manually create a Promise.
    return new Promise(function (resolve) {
      axios
        .get('https://tutorialzine.com/misc/files/example.json')
        .then(function (json) {
          // The data from the request is available in a .then block
          // We return the result using resolve.
          resolve(json);
        });
    });
  }
  getJSON().then(function (result) {
    // console.log('result promise', result);
  });

  // cách 2:
  // Async/Await approach

  // The async keyword will automatically create a new Promise and return it.
  async function getJSONAsync() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(
      'https://tutorialzine.com/misc/files/example.json',
    );

    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json;
  }

  getJSONAsync().then(function (result) {
    // Do something with result.
    console.log('result', result);
  });

  //--> cách viết async dễ hiểu hơn, ngắn gọn hơn

  let times = 4;

  if (times > 3) {
    let hello = 'say Hello instead';
    console.log(hello); // "say Hello instead"
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>async await</Text>
    </SafeAreaView>
  );
};

export default AsynStr;

const styles = StyleSheet.create({});
