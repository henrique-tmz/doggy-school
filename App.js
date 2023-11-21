import Sair from './src/components/Sair/indexSair';
import Inicio from './src/components/Inicio/index';
import Login from './src/components/Login/indexLog';
import DadosCli from './src/components/DadosCli/indexDcli';
import DadosDog from './src/components/DadosDog/indexDdog';
import Adicionar from './src/components/Adicionar/indexAdd';
import Cadastro from './src/components/Cadastro/indexCadas';
import Notificacao from './src/components/Notificacao/indexNotif';
import Gerenciamento from './src/components/Gerenciamento/indexGeren';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator name="Inicio" components={Inicio}/>
        <Stack.Navigator name="Login" components={Login}/>
        <Stack.Navigator name="Cadastro" components={Cadastro}/>
        <Stack.Navigator name="Gerenciamento" components={Gerenciamento}/>
        <Stack.Navigator name="Adicionar" components={Adicionar}/>
        <Stack.Navigator name="DadosCli" components={DadosCli}/>
        <Stack.Navigator name="DadosDog" components={DadosDog}/>
        <Stack.Navigator name="Notificacao" components={Notificacao}/>
       {/*<Stack.Navigator name="Relatorio" components={Relatorio}/> */} 
        <Stack.Navigator name="Sair" components={Sair}/>
      </NavigationContainer>  
  );
}