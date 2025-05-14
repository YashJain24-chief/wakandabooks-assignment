import { View, Text } from "react-native";
import { Article } from "../redux/slices/articleSlice";
import styles from "../styles/BusinessDetail";

const ArticleList = ({ item }: { item: Article }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.name}</Text>
    <Text>Qty: {item.qty}</Text>
    <Text>Price: ₹{item.selling_price}</Text>
  </View>
);

export default ArticleList;
