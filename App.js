import React, { useState } from 'react';
import Sair from './src/components/Sair/indexSair';
import Inicio from './src/components/Inicio/index';
import Login from './src/components/Login/indexLog';
import Agenda from './src/components/Agenda/indexAgen';
import DadosCli from './src/components/DadosCli/indexDcli';
import DadosDog from './src/components/DadosDog/indexDdog';
import { View, Text, TouchableOpacity } from 'react-native';
import Adicionar from './src/components/Adicionar/indexAdd';
import Cadastro from './src/components/Cadastro/indexCadas';
import { NavigationContainer } from '@react-navigation/native';
import Notificacao from './src/components/Notificacao/indexNotif';
import Gerenciamento from './src/components/Gerenciamento/indexGeren';
import { createNativestackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*<NavigationContainer>
      <Stack.NavigationContainer>
        <Stack.Screen name:"Inicio" components:(index.js)/>
        <Stack.Screen name:"Login" components:(indexLog)/>
        <Stack.Screen name:"Cadastro" components:(indexCadas)/>
        <Stack.Screen name:"Gerenciamento" components:(indexGeren)/>
        <Stack.Screen name:"Adicionar" components:(indexAdd)/>
        <Stack.Screen name:"DadosCli" components:(indexDcli)/>
        <Stack.Screen name:"DadosDog" components:(indexDdog)/>
        <Stack.Screen name:"Notificacao" components:(indexNotif)/>
        <Stack.Screen name:"Relatorio" components:(indexRela)/>
        <Stack.Screen name:"Sair" components:(indexSair)/>
      </Stack.NavigationContainer>
    </NavigationContainer>*/
  );
}