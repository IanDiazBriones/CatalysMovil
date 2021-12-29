import * as React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSession} from '../../hooks/useSession';
import {actionsRoot} from '../../redux/sessionUser/RootRedux';
import {Card} from "react-native-elements";
import {Dimensions} from "react-native"

export const DatosUsuario = ({}) => {

    const {user} = useSelector((state) => state);

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>Mis Datos</Card.Title>
                <Card.Divider/>
                <View key={"key"} style={styles.user}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: "https://randomuser.me/api/portraits/men/4.jpg"}}
                    />
                    <Text style={styles.name}>{user.fullname}</Text>
                </View>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});
