import * as React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {useState} from 'react';

export const HitosObra = ({obra}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Hitos Asignados De La Obra</Card.Title>
        <Divider />
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {obra?.hitos?.map((hito, index) => {
            return (
              <View key={'viewpobra' + index}>
                {index !== 0 && <Divider key={'Divider' + index} />}
                <Text style={styles.subHeader} key={'tesxt21312' + index}>
                  {'Nombre: ' + hito.tarea}
                </Text>
                <Text style={styles.subHeader} key={'tesxt2131' + index}>
                  {'Descripción: ' + hito.descripcion}
                </Text>
                <Text style={styles.subHeader} key={'tesxt213' + index}>
                  Estado: {hito.estado === 0 ? 'Vigente' : 'Terminado'}{' '}
                </Text>
              </View>
            );
          })}
        </View>
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
    color: 'black',
  },
});
