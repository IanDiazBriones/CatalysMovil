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
import {Table, Row, Rows} from 'react-native-table-component';
import {DataTable} from 'react-native-paper';
import {TableView} from 'react-native-responsive-table';

export const ProductosObra = ({obra}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Productos Asignados De La Obra</Card.Title>
        <Card.Divider />
        <ScrollView horizontal={true}>
          <View
            style={{
              paddingHorizontal: 5,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}>
            {obra?.productos?.map((producto, index) => {
              return (
                <View key={'viewpobra' + index}>
                  {index !== 0 && <Divider key={'Divider' + index} />}
                  <Text key={'tesxt213121' + index}>
                    {producto.nombre} {producto.cantidad} {producto.proveedor}{' '}
                    {producto.codigo} {'$' + producto.precio}{' '}
                    {producto.categoria} {'$' + producto.valor}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
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
