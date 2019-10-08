import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const Main = () => {
  return (
    <View style={styles.container}>
      <Text>amin</Text>
    </View>
  );
};

Main.options = () => {
  return {
    topBar: {
      visible: false,
    },
  };
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
