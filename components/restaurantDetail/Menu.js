import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/themed';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

const _renderItem = ({item}) => (
  <View>
    <View style={styles.menuItem}>
      <View>
        {/* <TouchableOpacity style={{backgroundColor: 'red'}}> */}
          <BouncyCheckbox
            iconStyle={{borderColor: 'lightgray', borderRadius: 10}}
            fillColor="green"
          />
        {/* </TouchableOpacity> */}
      </View>
      <FoodInfo
        title={item.title}
        description={item.description}
        price={item.price}
      />
      <FoodImage image={item.image} />
    </View>
    <Divider
      width={0.5}
      orientation="vertical"
      style={{marginHorizontal: 20}}
    />
  </View>
);

export default function Menu({foods}) {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={_renderItem}
      />
    </>
  );
}
const FoodInfo = props => {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  );
};
const FoodImage = props => {
  return (
    <View>
      <Image
        source={{uri: props.image}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },
  info: {
    width: 240,
    justifyContent: 'space-evenly',
  },
});
