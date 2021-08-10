import { render } from "react-dom";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
const header=()=>{
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <Icon name='ios-search' style={{fontSize24}}/>
                    <TextInput placeholder="Search Car, Brand, Model" style ={{fontSize:24, marginLeft:15}}/>
                </View>
            </View>
        </View>
    )
    
}