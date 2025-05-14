import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import createBusiness from "../utilities/createBusiness ";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import styles from "../styles/AddBusiness";

const AddBusinessScreen = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const db = useAppSelector((state) => state.rxDB.db);

  const handleSave = async () => {
    if (!db) return;

    if (!name.trim()) {
      Alert.alert("Validation", "Please enter a business name");
      return;
    }

    await createBusiness(db, name, dispatch);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Business Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Business</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBusinessScreen;
