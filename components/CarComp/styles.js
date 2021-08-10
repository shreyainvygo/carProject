import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header:
    {
      height:80, 
      backgroundColor:'#c45653', 
      justifyContent:'center', 
      paddingHorizontal: 5
    },
    headerContainer
    :
    {height:50, backgroundColor:'white', borderRadius: 20,flexDirection:'row', padding:5,alignItems:"center"
  },
  carStyle:{
    flexDirection: 'row', 
    padding: 10,                       
    backgroundColor: 'white', 
    marginHorizontal: 20,                        
    shadowOffset: { width: 0, height: 0 },
                            
    shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null}
    
  });