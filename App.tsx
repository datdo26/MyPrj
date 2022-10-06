import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import RootStack from './src/nav/RootStack';
import UseRef from './src/screens/useRef';
import AsynStr from './src/screens/AsynStr';
import UseCallback from './src/screens/useCallback';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import ExRedux from './src/screens/ExRedux';

const App = () => {
  return (
    <Provider store={store}>
      <ExRedux />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
