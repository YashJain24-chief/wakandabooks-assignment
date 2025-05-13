import initializeDb from "../db/db";
import { BusinessCollectionName } from "../constants/constants";

const getAllBusinesses = async () => {
  const db = await initializeDb();

  if (db) {
    return db[BusinessCollectionName].find().exec();
  }
};

export default getAllBusinesses;
