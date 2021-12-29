import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {useSession} from '../../hooks/useSession';
import {DatosUsuario} from '../components/DatosUsuario';
import {ListObrasComponent} from './components/ListObrasComponent';

export const ListObras = ({navigation}) => {
  useSession(navigation);

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
      <ScrollView>
        <DatosUsuario />
        <ListObrasComponent navigation={navigation} />
      </ScrollView>
    </View>
  );
};
