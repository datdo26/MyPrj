import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// @ts-ignore
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultValue = {
  firstName: '',
  lastName: '',
};

const AsynStr = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const saveValue = () => {
    if (name.length == 0 || age.length == 0) {
      alert('fill data');
    } else {
      try {
        const user = {
          Name: name,
          Age: age,
        };
        AsyncStorage.setItem('UserData', JSON.stringify(user));
        alert('datasaved');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getValue = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearValue = () => {
    setName(''), setAge('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Name</Text>
        <TextInput
          placeholder={''}
          value={name}
          onChangeText={value => setName(value)}
          style={{
            height: 42,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <Text>Age</Text>
        <TextInput
          placeholder={''}
          value={age}
          onChangeText={value => setAge(value)}
          style={{
            height: 42,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <Button title="Clear Data" onPress={() => clearValue()} />
        <Button title="Save Data" onPress={() => saveValue()} />
        <Button title="Get Data" onPress={() => getValue()} />
      </View>
    </SafeAreaView>
  );
};

export default AsynStr;

const styles = StyleSheet.create({});
