import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { RootStackParamList } from "../navigation/RootNavigator";
import createArticle from "../utilities/createArticle";
import styles from "../styles/AddArticle";

type RouteParams = RouteProp<RootStackParamList, "AddArticle">;

const AddArticleScreen = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const db = useAppSelector((state) => state.rxDB.db);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute<RouteParams>();
  const { businessId } = route.params;

  const handleSave = async () => {
    if (!db) return;

    if (!name || !qty || !price) {
      Alert.alert("Validation", "Please fill in all fields");
      return;
    }

    await createArticle(
      db,
      dispatch,
      name,
      parseInt(qty),
      parseFloat(price),
      businessId
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Article Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        value={qty}
        onChangeText={setQty}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Selling Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Article</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddArticleScreen;
