import styles from './style.js';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Form() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome" />

        <Text style={styles.formLabel}>Sobrenome</Text>
        <TextInput style={styles.input} placeholder="Sobrenome" />

        <Text style={styles.formLabel}>E-mail</Text>
        <TextInput style={styles.input} placeholder="E-mail" />

        <Text style={styles.formLabel}>Sobrenome</Text>
        <TextInput style={styles.input} placeholder="Sobrenome" />

        <Text style={styles.formLabel}>Numero de celular</Text>
        <TextInput style={styles.input} placeholder="Numero de celular" />

        <TouchableOpacity style={styles.buttonCadas} onPress={() => {}}>
          <Text style={styles.textButtonCadas}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
