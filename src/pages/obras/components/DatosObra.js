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
import {useState} from 'react';

export const DatosObra = ({obra}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Datos Anteriores De La Obra</Card.Title>
        <Divider />
        <Text style={styles.subHeader}>{'Nombre : ' + obra.nombre_obra}</Text>
        <Text style={styles.subHeader}>
          {'Fecha Inicio : ' + obra.inicio_obra}
        </Text>
        <Text style={styles.subHeader}>
          {'Fecha Termino : ' + obra.termino_obra}
        </Text>
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
