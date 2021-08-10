import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class trips extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Trips</Text>
            </View>
        );
    }
}
export default trips;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});