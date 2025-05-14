import { replicateCouchDB } from "rxdb/plugins/replication-couchdb";
import {
  ArticlesCollectionName,
  BusinessCollectionName,
} from "../constants/constants";
import fetch from "cross-fetch";

const COUCHDB_URL = "http://admin:admin123@localhost:5984";

export const startReplication = (db) => {
  try {
    console.log("Start sync...");

    // Sync businesses
    replicateCouchDB({
      collection: db[BusinessCollectionName],
      url: `${COUCHDB_URL}/${BusinessCollectionName}/`,
      fetch: fetch,
      pull: {},
      push: {},
    });

    // Sync articles
    replicateCouchDB({
      collection: db[ArticlesCollectionName],
      url: `${COUCHDB_URL}/${ArticlesCollectionName}/`,
      fetch: fetch,
      pull: {},
      push: {},
    });
  } catch (err) {
    console.log("Error initialize sync", err);
  }
};
