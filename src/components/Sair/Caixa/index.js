import styles from './style.js';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Caixa() {
  return (
    <View style={styles.caixaContext}>
      <View style={styles.caixa}>
        <Text style={styles.textCaixa}>Deseja sair do aplicativo?</Text>
      </View>
    </View>
  );
}
