import React from 'react';
import styles from './style';
import PataImg from './pata.png';
import { Image, View } from 'react-native';

export default function Pata() {
  return (
    <View style={styles.boxPata}>
      <Image source={PataImg} style={styles.pataImg} />
    </View>
  );
}
