import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const {height, weigth} = Dimensions.get('window')

//for proper android display
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }


const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:'center'
    },
    searchConatiner:{ 
        height: this.startHeaderHeight, 
        backgroundColor: 'white', 
        borderBottomWidth: 1, 
        borderBottomColor: '#dddddd' 
    },
    search:{
        flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        },
    serchPlaceholder:{
        underlineColorAndroid="transparent",
                                placeholder="Try New Delhi",
                                placeholderTextColor="grey",
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }},
    }
    

    
});