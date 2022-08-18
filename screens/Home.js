import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import HeaderTab from '../components/HeaderTab';
// import SearchMapBar from '../components/home/SearchMapBar';
// import Categories from '../components/Categories';
// import RestaurantItem, {localRestaurant} from '../components/RestaurantItem';
// import BottomTab from '../components/BottomTab';
import axios from 'axios';
import { Divider } from '@rneui/themed';
import HeaderTab from '../components/home/HeaderTab';
import SearchMapBar from '../components/home/SearchMapBar';
import BottomTabs from '../components/home/BottomTab';
import Categories from '../components/home/Categories';
import RestaurantItem,{localRestaurant} from '../components/home/RestaurantItem'

const API_KEY =
  'kcsRlwbMzHVq0pNhxiazMD9gtskSZEkE5Xh7UGUHAtfyt3YoKV6IIZQtDok8tjYBlvDnFddtqzQRJP8ozS3dU1sbUoR0cEpWtyMfVZgeXVYIiC_0lODwrg3AGD_BYnYx';

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurant);
  const [city, setCity] = useState('California');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantData = () => {
    // Get API from yelp but it is not working.
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
    // const apiOptions = {
    //   headers: {
    //     Authorization: `Bearer ${API_KEY}`,
    //   },
    // };
    // return
    // fetch(yelpUrl,apiOptions)
    // .then((res)=>res.json())
    // .then((json)=>setRestaurantData(json.businesses))

    // API from Json Server
    axios('https://8cab-1-53-11-57.ngrok.io/data')
      .then(res =>
        setRestaurantData(
         res.data.businesses.filter(business => business.transactions.includes(activeTab.toLowerCase()))
        ),
      )
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };
  useEffect(() => {
    getRestaurantData();
  }, [activeTab]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchMapBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    backgroundColor: 'rgb(0, 177, 79)',
    padding: 15,
  },
});
