import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

import carTypes from './carType';
import  brands from './brands';
import stylesCar from './stylesCar';
import stylesCarType from './stylesCarType';
import stylesBrand from './stylesBrand';
import cars from './cars';

const CarsList = (props) => {
  return (
    <ScrollView>
      <View style={[styles.container, {
      flexDirection: "column"}]}>
        <View style={{ flex: 1}, stylesCar.container }>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Popular cars</Text>
          <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                                  <FlatList horizontal
        data={cars}
        renderItem={({item}) => <stylesCar car={item} />}
        />
                                </ScrollView>
                                
        </View>
        <View style={{ flex: 2},stylesBrand.container} >
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Brands</Text>
          <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                  <FlatList horizontal
        data={brands}
        renderItem={({item}) => <stylesBrand car={item} />}
        />
                                </ScrollView>
        </View>
        <View style={{ flex: 3}, stylesCarType.container} >
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Types</Text>
          <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                  <FlatList horizontal
        data={carTypes}
        renderItem={({item}) => <stylesCarType car={item} />}
        />
                                </ScrollView>
        </View>

      </View>
    </ScrollView>
    
  );
};

export default CarsList;




