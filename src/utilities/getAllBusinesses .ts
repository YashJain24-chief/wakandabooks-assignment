import initializeDb from "../db/db";
import { BusinessCollectionName } from "../constants/constants";
import { RxDatabase } from "rxdb";

const getAllBusinesses = async (db: RxDatabase) => {
  try {
    const result = await db[BusinessCollectionName].find().exec();
    return result;
  } catch (err) {
    console.log(err, "Error finding businesses...");
  }
};

export default getAllBusinesses;
