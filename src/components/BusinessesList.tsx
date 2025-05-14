import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeScreen";

const BusinessesList = ({ item, navigation }: any) => {
  const handleBusinessOnPress = () => {
    navigation.navigate("BusinessDetail", {
      businessId: item.id,
      businessName: item.name,
    });
  };

  return (
    <TouchableOpacity onPress={handleBusinessOnPress}>
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessesList;
