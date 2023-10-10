import React from 'react';
import styles from './style';
import { View, Text } from 'react-native';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Cadastro</Text>
    </View>
  );
}