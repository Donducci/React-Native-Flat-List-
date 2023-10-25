import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const DetailView = ({route, navigation}) => {
  // Get car details from route params
  const carDetails = route.params.carDetails;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgreen',
          height: 60,
          marginHorizontal: 10,
          padding: 8,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 10,
            padding:15,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
            fontWeight: 'bold',
          }}>
          Car Details
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
          }}>
          Year: {carDetails.year}
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
          }}>
          Name: {carDetails.name}
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
          }}>
          Model: {carDetails.model}
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
          }}>
          Transmission: {carDetails.transmission}
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
          }}>
          Color: {carDetails.color}
        </Text>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
          }}>
          Body Type: {carDetails.bodyType}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
        }}
        onPress={() => {
          navigation.popToTop();
        }}>
        <Text>Go to ListView</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailView;
