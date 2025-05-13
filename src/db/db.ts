import { addRxPlugin, createRxDatabase } from "rxdb/plugins/core";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

import articleSchema from "./article.schema";
import businessSchema from "./business.schema";

import STORAGE_SQLITE from "./storage";

const dbName = "wakandabooks_assignment_db";
export const BusinessCollectionName = "business";
export const ArticlesCollectionName = "articles";

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
      });

      await db.addCollections({
        [ArticlesCollectionName]: {
          schema: articleSchema,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }

  return db;
}

export default initializeDb;
