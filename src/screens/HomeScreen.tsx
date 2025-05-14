import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import getAllBusinesses from "../utilities/getAllBusinesses ";
import { setBusinesses } from "../redux/slices/businessSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import styles from "../styles/HomeScreen";
import BusinessesList from "../components/BusinessesList";
import FabIcon from "../components/FabIcon";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const db = useAppSelector((state) => state.rxDB.db);
  const businesses = useAppSelector((state) => state.business.businessesList);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (!db) return;

    const fetchBusinessData = async () => {
      const result = await getAllBusinesses(db);
      if (result && result.length > 0) {
        const data = result.map((doc) => doc.toJSON());
        dispatch(setBusinesses(data));
      }
      setLoading(false);
    };

    fetchBusinessData();
  }, [db]);

  const handleBusinessFabOnPress = () => {
    navigation.navigate("AddBusiness");
  };

  if (loading)
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={businesses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BusinessesList item={item} navigation={navigation} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No businesses yet</Text>
        }
      />

      <FabIcon handleFabOnPress={handleBusinessFabOnPress} />
    </View>
  );
};

export default HomeScreen;
