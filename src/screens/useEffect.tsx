import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const UseEffect = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState([]);
  const tabs = ['posts', 'comments', 'albums'];
  const [type, setType] = useState('posts');
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(posts => setPost(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log('type', type);
  // console.log('post', post);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          {tabs.map(item => (
            <Button title={item} key={item} onPress={() => setType(item)} />
          ))}
        </View>

        <Button
          title="go to UseCallback"
          onPress={() => {
            navigation.navigate('UseCallback');
          }}
        />

        <Text>HomeScreen</Text>
        <TextInput
          placeholder="alo"
          onChangeText={e => setTitle(e)}
          value={title}
        />
        {post.map(item => (
          <Text key={item.id}> - {item.title || item?.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UseEffect;

const styles = StyleSheet.create({});
