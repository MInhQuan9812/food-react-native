import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

export default function RestaurantItems({navigation,...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail",
             {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            }
            )
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export const localRestaurant = [
  // {
  //   name: 'Beachside Bar',
  //   image_url:
  //     'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
  //   categories: ['Cafe', 'Bar'],
  //   price: '$$',
  //   reviews: 1244,
  //   rating: 4.5,
  // },
  // {
  //   name: 'Benihana',
  //   image_url:
  //     'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  //   categories: ['Cafe', 'Bar'],
  //   price: '$$',
  //   reviews: 1244,
  //   rating: 3.7,
  // },
  // {
  //   name: "India's Grill",
  //   image_url:
  //     'https://localinsider.storage.googleapis.com/2021/10/Chefs-Club-Restaurant-Skylight-Nha-Trang-Dang-cap-am-thuc-tai-nha-hang-Quoc-te-cao-nhat-Nha-Trang-13-1624285897.jpg',
  //   categories: ['Indian', 'Bar'],
  //   price: '$$',
  //   reviews: 700,
  //   rating: 4.9,
  // },
];
const RestaurantImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
    <View style={styles.wrapper_icon_heart}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faHeart} size={25} color="white" />
      </TouchableOpacity>
    </View>
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={styles.name_restaurant}>
        {props.name}
      </Text>
      <Text style={styles.time_go}>30-35 min</Text>
    </View>
    <View style={styles.wrapper_rating}>
      <Text style={{fontWeight: '700'}}>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper_item: {
    marginTop: 15,
    padding: 15,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 7,
  },
  wrapper_icon_heart: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: 2,
    padding: 2,
    borderRadius: 15,
  },
  name_restaurant: {
    fontWeight: '900',
    fontSize: 20,
  },
  time_go: {
    fontSize: 13,
    color: 'grey',
  },
  wrapper_rating: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
