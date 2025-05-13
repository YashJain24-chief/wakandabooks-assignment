import initializeDb from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { BusinessCollectionName } from "../constants/constants";

const createBusiness = async (name: string) => {
  const db = await initializeDb();
  const id = uuidv4();

  if (db) {
    await db[BusinessCollectionName].insert({ id, name });
  }
};

export default createBusiness;
