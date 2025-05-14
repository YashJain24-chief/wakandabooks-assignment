import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/HomeScreen";
import { FabIconInterface } from "../constants/interface";

const FabIcon = ({ handleFabOnPress }: FabIconInterface) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={handleFabOnPress}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

export default FabIcon;
