import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import {
  getRxStorageSQLiteTrial,
  getSQLiteBasicsExpoSQLiteAsync,
} from "rxdb/plugins/storage-sqlite";

import { openDatabaseAsync } from "expo-sqlite";

const STORAGE_SQLITE = wrappedValidateAjvStorage({
  storage: getRxStorageSQLiteTrial({
    sqliteBasics: getSQLiteBasicsExpoSQLiteAsync(openDatabaseAsync),
  }),
});

export default STORAGE_SQLITE;
