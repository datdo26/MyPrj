import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const UseRef = () => {
  //useRef trả về object
  const [count, setCount] = useState(60);

  const timerID = useRef();
  //define

  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    console.log('start -> ', timerID.current);
  };
  //bấm start thì timerID ở phạm vi đó trở thành số theo set interval
  //khi n re-render thì k stop đc vì tạo phạm vi mới của hàm

  const handleStop = () => {
    clearInterval(timerID.current);
    console.log('stop -> ', timerID.current);
  };
  //khi bấm stop thì comp chưa kịp re-render thì có thể clear đc set interval, vẫn là phạm vi lúc đầu

  console.log(count, prevCount.current);

  return (
    <SafeAreaView>
      <Text>UseRef</Text>

      <Text>{count}</Text>
      <Button title="start" onPress={handleStart} />
      <Button title="stop" onPress={handleStop} />
    </SafeAreaView>
  );
};

export default UseRef;

const styles = StyleSheet.create({});
