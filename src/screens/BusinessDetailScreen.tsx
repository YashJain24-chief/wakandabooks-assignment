import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import getArticlesByBusiness from "../utilities/getArticlesByBusiness ";
import { setArticles } from "../redux/slices/articleSlice";
import styles from "../styles/BusinessDetail";
import ArticleList from "../components/ArticleList";
import FabIcon from "../components/FabIcon";

type RouteParams = RouteProp<RootStackParamList, "BusinessDetail">;
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BusinessDetail"
>;

const BusinessDetailScreen = () => {
  const route = useRoute<RouteParams>();
  const navigation = useNavigation<NavigationProp>();
  const { businessId, businessName } = route.params;
  const db = useAppSelector((state) => state.rxDB.db);
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.articlesList);

  useEffect(() => {
    if (!db) return;

    const fetchArticles = async () => {
      const results = await getArticlesByBusiness(db, businessId);
      if (results) {
        dispatch(setArticles(results.map((doc) => doc.toJSON())));
      }
    };

    fetchArticles();
  }, [db]);

  const handleArticleFabOnPress = () => {
    navigation.navigate("AddArticle", { businessId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{businessName}</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={ArticleList}
        ListEmptyComponent={<Text>No articles found</Text>}
      />

      <FabIcon handleFabOnPress={handleArticleFabOnPress} />
    </View>
  );
};

export default BusinessDetailScreen;
