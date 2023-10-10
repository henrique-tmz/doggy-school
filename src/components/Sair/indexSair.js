import { AntDesign } from '@expo/vector-icons';
import Caixa from './Caixa/index';
import Botoes from './Botoes/index';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => {}}>
        <AntDesign name="left" color="#000000" size={25} />
      </TouchableOpacity>
      <Caixa />
      <Botoes />
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
