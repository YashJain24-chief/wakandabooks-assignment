import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddBusinessScreen from "../screens/AddBusinessScreen";
import AddArticleScreen from "../screens/AddArticleScreen";
import BusinessDetailScreen from "../screens/BusinessDetailScreen";

export type RootStackParamList = {
  Home: undefined;
  AddBusiness: undefined;
  AddArticle: undefined;
  BusinessDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddBusiness" component={AddBusinessScreen} />
      <Stack.Screen name="AddArticle" component={AddArticleScreen} />
      <Stack.Screen name="BusinessDetail" component={BusinessDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
