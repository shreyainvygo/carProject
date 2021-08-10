import { StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.logo,
        }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Text style={styles.bottomSection}>{item.brand}</Text>
    </View>
  );
};


export default ListItem;




const stylesBrand = StyleSheet.create({
    container: {
      paddingHorizontal: 14,
      paddingVertical: 14,
      backgroundColor: 'white',
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 20
    },
    imageStyle: {
      borderRadius: 12,
      marginLeft: 0
    },
    bottomSection: {
      marginTop: 8
    }
   });
   