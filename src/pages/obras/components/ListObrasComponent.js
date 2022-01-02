import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const ListObrasComponent = ({navigation}) => {
  const [obras, setObras] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.1.103:8000/obras/encargados', {timeout: 150000})
      .then(r => {
        setObras(JSON.parse(r.data));
      })
      .finally(() => {
        console.log('termine qxios');
      });
  }, []);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Obras</Card.Title>
        <Divider />
        {obras?.map((obra, index) => {
          return (
            <View key={'viewloc' + obra.id_obra}>
              {index !== 0 && <Divider key={'div' + obra.id_obra} />}
              <TouchableOpacity
                key={obra.id_obra + 'asdadafsada'}
                onPress={() => {
                  navigation.navigate('Detalle Obra', {
                    nombre_obra: obra.nombre_obra,
                    inicio_obra: obra.inicio_obra,
                    termino_obra: obra.termino_obra,
                  });
                }}
                style={styles.subHeader}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {obra.nombre_obra} {'Cod ' + obra.id_obra}{' '}
                  {obra.estado === 0 ? ' Vigente' : ' Terminada'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  subHeader: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});
