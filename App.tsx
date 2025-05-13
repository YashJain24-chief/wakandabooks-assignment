import { Text, View } from "react-native";
import styles from "./src/styles/App";
import { useEffect, useState } from "react";

import initializeDb from "./src/db/db";
import { RxDatabase } from "rxdb";

export default function App() {
  const [db, setDb] = useState<RxDatabase | undefined>(undefined);

  console.log(db);

  useEffect(() => {
    const initDB = async () => {
      const _db: RxDatabase | undefined = await initializeDb();
      setDb(_db);
    };
    initDB().then();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Load Home Screen here...</Text>
    </View>
  );
}
