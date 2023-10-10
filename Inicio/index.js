import React, {useEffect} from 'react';
import styles from './style';
import { Image, View, ImageBackground } from 'react-native';

const Inicio = ({ navigation }) => {
  useEffect(()=> {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  return () => clearTimeout(timer);
}, [navigation]);

  return(
    <View style=(styles.container)>
     <ImageBackground source={require('./img/cachorrinhos.png')}
        style={styles.container}>
        <Image source={require('./img/cachorro.png')} style={styles.container}/>
      </ImageBackground>
    </View>
  );
};
