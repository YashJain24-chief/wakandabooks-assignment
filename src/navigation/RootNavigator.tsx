import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddBusinessScreen from "../screens/AddBusinessScreen";
import AddArticleScreen from "../screens/AddArticleScreen";
import BusinessDetailScreen from "../screens/BusinessDetailScreen";
import { RxDatabase } from "rxdb";
import initializeDb from "../db/db";
import { setRxDB } from "../redux/slices/dbSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { startReplication } from "../services/sync";
import NetInfo from "@react-native-community/netinfo";

export type RootStackParamList = {
  Home: undefined;
  AddBusiness: undefined;
  AddArticle: { businessId: string };
  BusinessDetail: { businessId: string; businessName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const db = useAppSelector((state) => state.rxDB.db);

  useEffect(() => {
    const initDB = async () => {
      const rxDB: RxDatabase | undefined = await initializeDb();
      dispatch(setRxDB(rxDB)); //fix non-serializable issue
    };
    initDB().then();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && db) {
        console.log("Internet restored — starting replication");
        startReplication(db);
      }
    });

    return () => unsubscribe();
  }, [db]);

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
