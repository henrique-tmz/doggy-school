import styles from './style.js';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingViewComponent = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.formContext}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Nome</Text>
          <TextInput style={styles.input} placeholder="Nome" />

          <Text style={styles.formLabel}>Porte</Text>
          <TextInput style={styles.input} placeholder="Porte" />

          <Text style={styles.formLabel}>Raça</Text>
          <TextInput style={styles.input} placeholder="Raça" />

          <Text style={styles.formLabel}>Peso</Text>
          <TextInput style={styles.input} placeholder="Peso" />

          <Text style={styles.formLabel}>Idade</Text>
          <TextInput style={styles.input} placeholder="Idade" />

          <View>
            <TouchableOpacity
              style={styles.buttonCadas}
              onPress={() => navigation.navigate('Gerenciamento')}>
              <Text style={styles.textButtonCadas}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

/*export default function Form() {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome" />

        <Text style={styles.formLabel}>Porte</Text>
        <TextInput style={styles.input} placeholder="Porte" />

        <Text style={styles.formLabel}>Raça</Text>
        <TextInput style={styles.input} placeholder="Raça" />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.input} placeholder="Peso" />

        <Text style={styles.formLabel}>Idade</Text>
        <TextInput style={styles.input} placeholder="Idade" />

        <TouchableOpacity style={styles.buttonCadas} onPress={() => {}}>
          <Text style={styles.textButtonCadas}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
*/
