import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const RoundButton = ({onPress, title, variant, disabled}) => {
  const colors = {
    danger: 'red',
    warning: 'orange',
    primary: '#000',
    success: 'green',
  };
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: colors[variant],
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 50,
          width: 250,
        }}
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.5}>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};
