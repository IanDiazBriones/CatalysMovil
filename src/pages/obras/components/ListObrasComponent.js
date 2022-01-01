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
import * as requestFromServer from '../../../axios';
import {useSelector} from 'react-redux';

export const ListObrasComponent = ({navigation}) => {
  const [obras, setObras] = useState([]);
  const {user} = useSelector(state => state);
  useEffect(() => {
    requestFromServer
      .getObras({nombre: user.fullname})
      .then(r => setObras([...r.data]));
  }, []);
  useEffect(() => console.log(obras), [obras]);

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
                onPress={() =>
                  navigation.navigate('Detalle Obra', {id: obra.id_obra})
                }>
                <Text
                  key={'textasdsadas' + obra.id_obra}
                  style={styles.subHeader}>
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
