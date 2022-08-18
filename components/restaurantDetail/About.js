import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
export default function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params;
  const categoriesFormat = categories.map(data => data.title).join(' • ');
  const description = `${categoriesFormat} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = props => {
  return <Image source={{uri: props.image}} style={styles.image} />;
};
const RestaurantName = props => {
  return <Text style={styles.name}>{props.title}</Text>;
};

const RestaurantDescription = props => {
  return <Text style={styles.description}>{props.description}</Text>;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '600',
    fontSize: 30,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 16,
  },
});
