import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Subtitle = (props) => {
    const {title}=props
    return (
        <View style={styles.subtitle}>
            <Text style={styles.subtitle_text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        marginTop: 10, backgroundColor: 'purple', width: '100%', alignItems: 'center',
        marginBottom: 2,
    },
    subtitle_text: {
        color: 'white',
    },
});
