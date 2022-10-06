import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {decrement, increment} from '../store/ducks/counter';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {getUser, setUser} from '../store/ducks/userSlice';
import Counter from './Counter';

const ExRedux = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({test: 'hi', id: 1}));
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user.user);

  const count = useSelector((state: RootState) => state.counter.count);

  const voters = [
    'Anthony Sistilli ',
    'Bob Smith',
    'Stephanie Foo',
    'Kevin Ma',
  ];

  return (
    <SafeAreaView>
      <Text>Redux made easy</Text>
      {user && <Text>Hello {user?.firstname}</Text>}
      <Text>total vote: {count}</Text>
      {voters.map(voter => (
        <Counter name={voter} />
      ))}
    </SafeAreaView>
  );
};

export default ExRedux;

const styles = StyleSheet.create({});
