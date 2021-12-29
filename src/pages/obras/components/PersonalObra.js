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

export const PersonalObra = ({obra}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Personal Asignado De La Obra</Card.Title>
        <Card.Divider />
        {obra?.personal?.map((personal, index) => {
          return (
            <>
              <Text key={'text' + index} style={styles.subHeader}>
                {personal.name}
              </Text>
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
