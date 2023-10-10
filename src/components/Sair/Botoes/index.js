import styles from './style.js';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Caixa() {
  return (
    <View>
      <TouchableOpacity style={styles.buttonNao} onPress={() => {}}>
        <Text style={styles.textCaixa}>Não</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSim} onPress={() => {}}>
        <Text style={styles.textCaixa}>Sim</Text>
      </TouchableOpacity>
    </View>
  );
}
