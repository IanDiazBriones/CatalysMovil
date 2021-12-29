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

export const ProductosObra = ({obra}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Productos Asignados De La Obra</Card.Title>
        <Card.Divider />
        {obra?.productos?.map((producto, index) => {
          return (
            <>
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{width: '30%', textAlign: 'center'}}>
                  {producto.name}
                </Text>
                <Text style={{width: '30%', textAlign: 'center'}}>
                  {producto.cantidad}
                </Text>
              </View>
            </>
          );
        })}
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});
