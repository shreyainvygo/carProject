import { StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Text style={styles.bottomSection}>
        <Text>{item.name}</Text>
        <Text>{item.tagline}</Text>
      </Text>
    </View>
  );
};


export default ListItem;

const stylesCar = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 4,
    marginRight: 20,
    height: 190,
    width: '50%'
  },
  imageStyle: {
    marginLeft: 24,
    borderRadius: 12,
    marginTop: 4
  },
  bottomSection: {
    marginTop: 20
  }
 });
  
 


