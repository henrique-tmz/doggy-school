import styles from './style.js';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function Caixa() {
  return (
    <View style={styles.caixaContext}>
      <View style={styles.caixa}>
      </View>
    </View>
  );
}
