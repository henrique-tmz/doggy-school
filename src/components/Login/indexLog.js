import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './Form/index';
import Pata from './Pata/index';
import Title from './Title/index';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Title />
        <Pata />
      </View>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 80,
  },
});
