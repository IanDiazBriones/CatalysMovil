import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actionsRoot} from '../redux/sessionUser/RootRedux';
import {RoundButton} from './components/RoundButton';

const imgLogo = require('../../img/logo.png');

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {logging, errorLogin} = useSelector(state => state);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onChangeLogin = text => setUserName(text);
  const onChangePass = text => setPassword(text);

  const onLoginPress = () => dispatch(actionsRoot.login(username, password));
  const sendErrorMsg = () =>
    Alert.alert(
      'Atención',
      'No se encontró el usuario, por favor verifique credenciales',
    );

  useEffect(() => {
    if (errorLogin) {
      sendErrorMsg();
    }
  }, [errorLogin]);

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
      <Image source={imgLogo} style={{width: 350, height: 50}} />
      <Text style={{marginTop: 2, color: 'black'}}>App Móvil</Text>
      <Text style={{marginVertical: 8, color: 'black'}}>
        CatalystMovil V1.0
      </Text>
      <TextInput
        style={{
          width: 250,
          borderRadius: 50,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 16,
          marginVertical: 4,
          color: 'black',
        }}
        onChangeText={onChangeLogin}
        value={username}
        placeholder={'Nombre de usuario'}
        placeholderTextColor="black"
      />
      <TextInput
        style={{
          width: 250,
          borderRadius: 50,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 16,
          marginVertical: 4,
          color: 'black',
        }}
        onChangeText={onChangePass}
        value={password}
        placeholder={'Contraseña'}
        placeholderTextColor="black"
      />

      <RoundButton
        onPress={onLoginPress}
        title={logging ? 'por favor espere...' : 'Ingresar al sistema'}
        disabled={logging}
        variant={'primary'}
      />
    </View>
  );
};
