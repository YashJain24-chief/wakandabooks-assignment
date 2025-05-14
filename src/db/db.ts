import { addRxPlugin, createRxDatabase } from "rxdb/plugins/core";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";

import articleSchema from "./article.schema";
import businessSchema from "./business.schema";

import STORAGE_SQLITE from "./storage";

import {
  BusinessCollectionName,
  ArticlesCollectionName,
} from "../constants/constants";

import * as Crypto from "expo-crypto";
if (typeof global.crypto.subtle === "undefined") {
  global.crypto.subtle = {
    digest: Crypto.digest,
  };
}

addRxPlugin(RxDBQueryBuilderPlugin);

const dbName = "wakandabooks_assignment_db";

const isDevelopment =
  process.env.NODE_ENV !== "production" || process.env.DEBUG_PROD === "true";

async function initializeDb(storage = STORAGE_SQLITE) {
  if (isDevelopment) {
    addRxPlugin(RxDBDevModePlugin);
  }

  let db;

  try {
    console.log("Trying to initialize database...");

    db = await createRxDatabase({
      name: dbName,
      storage,
      multiInstance: false,
      closeDuplicates: true,
    });

    console.log("Yayyy! Database initialized!");
  } catch (err) {
    console.log("Oops! Error creating database...", err);
  }

  try {
    if (db) {
      await db.addCollections({
        [BusinessCollectionName]: {
          schema: businessSchema,
        },
        [ArticlesCollectionName]: {
          schema: articleSchema,
        },
      });
    }
  } catch (err) {
    console.log(err, "Creating collections failed...");
  }

  return db;
}

export default initializeDb;
