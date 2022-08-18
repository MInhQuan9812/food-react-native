import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              marginRight: 30,
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <View style={{backgroundColor: 'rgba(0, 182, 93,0.2)',borderRadius:30}}>
              <Image
                style={{width: 50, height: 40, resizeMode: 'contain'}}
                source={item.image}
              />
            </View>
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
