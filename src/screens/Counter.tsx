import React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {decrement, increment} from '../store/ducks/counter';

const Counter = props => {
  const {name} = props;
  const dispatch = useDispatch();

  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'grey',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <Text style={{fontSize: 20}}> {name} </Text>
      <Text style={{fontSize: 20}}> {`Votes: ${votes}`} </Text>
      <Button title="incerement" onPress={handleIncrement} />
      <Button title="decerement" onPress={handleDecrement} />
    </SafeAreaView>
  );
};

export default Counter;
