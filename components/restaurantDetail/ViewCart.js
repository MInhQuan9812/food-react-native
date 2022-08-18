import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        zIndex: 999,
      }}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginTop: 20,
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
