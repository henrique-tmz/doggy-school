import React from 'react';
import styles from './style';
import { Image, View } from 'react-native';

export default function Pata() {
  return (
    <View style={styles.boxPata}>
      <Image source={require('./pata.png')} style={styles.pataImg} />
    </View>
  );
}
