import styles from './style.js';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Form() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>E-mail</Text>
        <TextInput style={styles.input} placeholder="E-mail" />
        <Text style={styles.formLabel}>Senha</Text>
        <View style={styles.passwordView}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={input}
            onChangeText={(texto) => setInput(texto)}
            secureTextEntry={hidePass}
          />

          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons name="eye" color="#000000" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#000000" size={25} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonSenha} onPress={() => {}}>
          <Text style={styles.buttonSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAcess} onPress={() => {}}>
          <Text style={styles.textButtonAcess}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConta} onPress={() => this.props.navigation.navigate('Gerenciamento')}>
          <Text style={styles.buttonConta}>
            Não tem uma conta? Toque aqui para criar uma
          </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
}
