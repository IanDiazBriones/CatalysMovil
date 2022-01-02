import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSession} from '../hooks/useSession';
import {actionsRoot} from '../redux/sessionUser/RootRedux';
import {RoundButton} from './components/RoundButton';

const imgLogo = require('../../img/logo.png');

export const MenuPage = ({navigation}) => {
  const {user} = useSelector(state => state);
  const dispatch = useDispatch();

  useSession(navigation);
  const onSalirPress = () => dispatch(actionsRoot.logout());
  const onListRutaPress = () => navigation.navigate('Ver Obras');

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
      <Image source={imgLogo} style={{width: 350, height: 50}} />
      <Text style={{color: 'black'}}>Bienvenido {user.fullname}</Text>
      <View style={{marginVertical: 5}}>
        <RoundButton
          onPress={onListRutaPress}
          title="Ver Obras"
          variant={'warning'}
        />
      </View>

      <View style={{marginVertical: 10}}>
        <RoundButton onPress={onSalirPress} title="Salir" variant={'danger'} />
      </View>
    </View>
  );
};
