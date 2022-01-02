import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {useSession} from '../../hooks/useSession';
import {DatosUsuario} from '../components/DatosUsuario';
import {ListObrasComponent} from './components/ListObrasComponent';
import {useEffect, useState} from 'react';
import {DatosObra} from './components/DatosObra';
import {PersonalObra} from './components/PersonalObra';
import {ProductosObra} from './components/ProductosObra';
import {HitosObra} from './components/HitosObra';
import * as requestFromServer from '../../axios';
import axios from 'axios';

export const ViewObra = ({route, navigation}) => {
  const [obra, setObra] = useState({
    nombre_obra: 'Las aventuras de garrido',
    inicio_obra: '10/12/2020',
    termino_obra: '11/12/2020',
    personal: [
      {nombre: 'Garrido Bin Laden', rut_personal: '11111-1', ocupacion: 'Jefe'},
      {nombre: 'Jhon Lennon', rut_personal: '22222-2', ocupacion: 'Junior'},
      {
        nombre: 'Lord Valdomero',
        rut_personal: '33333-3',
        ocupacion: 'Mini Junior',
      },
    ],
    productos: [
      {
        nombre: 'Papas',
        cantidad: '3kg',
        proveedor: 'Wuachimingo',
        codigo: '123',
        precio: 123,
        categoria: 'Insumo',
        valor: 352,
      },
      {
        nombre: 'Paltas',
        cantidad: '2kg',
        proveedor: 'Wuachimingo',
        codigo: '321',
        precio: 124,
        categoria: 'Insumo',
        valor: 352,
      },
      {
        nombre: 'Carbón',
        cantidad: '5kg',
        proveedor: 'Wuachimingo',
        codigo: '4321',
        precio: 1235,
        categoria: 'Insumo',
        valor: 352,
      },
    ],
    hitos: [],
  });
  useSession(navigation);
  const {nombre_obra, inicio_obra, termino_obra} = route.params;
  useEffect(() => {
    axios
      .get('http://192.168.1.103:8000/obras/asignacion', {timeout: 150000})
      .then(r => {
        setObra({
          ...obra,
          nombre_obra: nombre_obra,
          inicio_obra: inicio_obra,
          termino_obra: termino_obra,
          personal: JSON.parse(r.data[0]),
          productos: JSON.parse(r.data[1]),
          hitos: JSON.parse(r.data[2]),
        });
      })
      .finally(() => {
        console.log('termine qxios');
      });
  }, []);

  useEffect(() => console.log(obra), [obra]);
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
