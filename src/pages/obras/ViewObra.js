import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {useSession} from '../../hooks/useSession';
import {DatosUsuario} from '../components/DatosUsuario';
import {ListObrasComponent} from './components/ListObrasComponent';
import {useState} from 'react';
import {DatosObra} from './components/DatosObra';
import {PersonalObra} from './components/PersonalObra';
import {ProductosObra} from './components/ProductosObra';
import {HitosObra} from './components/HitosObra';

export const ViewObra = ({navigation}) => {
  const [obra, setObra] = useState({
    personal: [
      {name: 'Garrido Bin Laden'},
      {name: 'Jhon Lennon'},
      {name: 'Lord Valdomero'},
    ],
    productos: [
      {name: 'Papas', cantidad: '3kg'},
      {name: 'Paltas', cantidad: '2kg'},
      {name: 'Carbón', cantidad: '5kg'},
    ],
  });
  useSession(navigation);

  return (
    <View
      style={{flex: 1, alignItems: 'center', marginTop: 10, paddingBottom: 10}}>
      <ScrollView>
        <DatosObra obra={obra} />
        <PersonalObra obra={obra} />
        <ProductosObra obra={obra} />
        <HitosObra obra={obra} />
      </ScrollView>
    </View>
  );
};
