import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Inbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inbox</Text>
                <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
            </View>
        );
    }
}
export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});