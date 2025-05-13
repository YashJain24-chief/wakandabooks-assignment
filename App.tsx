// import styles from "./src/styles/App";
import { useEffect, useState } from "react";

import initializeDb from "./src/db/db";
import { RxDatabase } from "rxdb";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  // const [db, setDb] = useState<RxDatabase | undefined>(undefined);

  useEffect(() => {
    const initDB = async () => {
      const _db: RxDatabase | undefined = await initializeDb();
      // setDb(_db);
    };
    initDB().then();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
