import { StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.img,
        }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Text style={styles.bottomSection}>{item.type}</Text>
    </View>
  );
};

export default ListItem;



const stylesCarType = StyleSheet.create({
    container: {
      width: 120,
      height: 105,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: 'white',
      marginRight: 12
    },
    imageStyle: {
      marginLeft: 28,
      borderRadius: 12,
      marginTop: 4
    },
    bottomSection: {
      marginTop: 10,
      marginLeft: 20
    }
   });
   