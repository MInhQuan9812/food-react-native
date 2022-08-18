import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faShoppingBag,
  faMoneyCheck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs(props) {
  const [onclick, setOnClick] = useState('home');
  return (
    <View
      style={{
        margin: 10,
        marginHorizontal: 30,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
        {IconMenu.map((item, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Icon {...item} onclick={onclick} setOnClick={setOnClick} />
          </View>
        ))}

          {/* Account Icon */}
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <View>
              <Feather
                name="user"
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: 'center',
                }}
              />
              <Text style={{fontWeight: '700'}}>Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const Icon = props => (
  <TouchableOpacity onPress={() => props.setOnClick(props.name2) }>
    <View>
      <Ionicons
        name={props.onclick === props.name2 ? props.name2 : props.name1}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: 'center',
          color: props.onclick === props.name2 ? 'green' : '#696969',
        }}
      />
      <Text
        style={{
          fontWeight: '700',
          color: props.onclick === props.name2 ? 'green' : '#696969',
        }}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
const IconMenu = [
  {
    name1: 'home-outline',
    name2: 'home',
    text: 'Home',
  },
  {
    name1: 'search-outline',
    name2: 'search-sharp',
    text: 'Search',
  },
  {
    name1: 'cart-outline',
    name2: 'cart',
    text: 'Grocery',
  },
  {
    name1: 'wallet-outline',
    name2: 'wallet-sharp',
    text: 'Orders',
  },
];
