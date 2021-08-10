import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'

import {createBottomTabNavigator} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
//import icons for navigation bar

import Explore from '../Screens/Explore'
import Inbox from '../Screens/Inbox'
import Saved from '../Screens/Saved'
import trips from '../Screens/Trips'
import Profile from '../Screens/Profile'

export default createBottomTabNavigator({
    Explore:{
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-search-outline" color={tintColor} size={24} />
            )
          } 
    },
    Saved: {
        screen: Saved,
        navigationOptions: {
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-heart-outline" color={tintColor} size={24} />
            )
          } 
    },
    trips:
    {
        screen: trips,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./assets/airbnb.png')} color={tintColor} size={24} />
            )
          } 
    },
    Inbox:
    {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
            )
          } 
    },
    Profile:
    {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-person-outline" color={tintColor} size={24} />
            )
          } 
        }
    },
    {
        tabBarOptions: {
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
          }
        }
      })
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

