import { View, Text,TouchableOpacity,TouchableNativeFeedback,TouchableHighlight} from 'react-native'
import React,{useState} from 'react'

export default function HeaderTab(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderChooseButton
        name="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}>
        </HeaderChooseButton>
      <HeaderChooseButton
        name="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}>
        </HeaderChooseButton>
    </View>
  );
}
const HeaderChooseButton = props => {
  return (
    <TouchableHighlight
      underlayColor="white"
      style={{
        backgroundColor:
          props.activeTab === props.name ? 'rgb(210, 210, 210)' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.name)}>
      <Text
        style={{
          color: props.activeTab === props.name ? '#00b14f' : 'grey',
          fontSize: 15,
          fontWeight: '800',
        }}>
        {props.name}
      </Text>
    </TouchableHighlight>
  );
};
