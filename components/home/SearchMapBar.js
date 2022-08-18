import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot, faClock} from '@fortawesome/free-solid-svg-icons';

export default function SearchMapBar() {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
      query={{ key: "AIzaSyBriy0kE2H20jJsmcsYCGVOgrSfU04VY8EPV4" }}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(",")[0];
        cityHandler(city);
      }}
        placeholder="Search"
        autoFocus={false}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '600',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <FontAwesomeIcon icon={faLocationDot} size={24} color="grey" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            justifyContent:'flex-end'
            }}>
            <FontAwesomeIcon
              icon={faClock}
              size={11}
              style={{marginRight: 6}}
              color="grey"
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
