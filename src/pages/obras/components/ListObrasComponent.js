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

export const ListObrasComponent = ({navigation}) => {
  const [obras, setObras] = useState([
    {name: 'Obra N°1', id: 1},
    {name: 'Obra N°2', id: 2},
    {name: 'Obra N°3', id: 3},
    {name: 'Obra N°4', id: 4},
  ]);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Obras</Card.Title>
        <Divider />
        {obras?.map((obra, index) => {
          return (
            <>
              {index !== 0 && <Divider key={'div' + index} />}
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('Detalle Obra', {id: obra.id})
                }>
                <Text key={'text' + index} style={styles.subHeader}>
                  {obra.name}
                </Text>
              </TouchableOpacity>
            </>
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
