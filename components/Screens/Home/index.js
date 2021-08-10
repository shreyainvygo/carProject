import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import CarsList from '../components/CarsList';
import Header from '../components/Header';

class Saved extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <CarsList />
                <StatusBar style="auto" />
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});