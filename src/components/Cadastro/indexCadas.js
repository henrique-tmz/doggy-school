import React from 'react';
import Form from './Form/index';
import Pata from './Pata/index';
import Title from './Title/index';
import { AntDesign } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => {}}>
        <AntDesign name="left" color="#000000" size={25} />
      </TouchableOpacity>
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
  icon: {
    width: '15%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
