import initializeDb from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { ArticlesCollectionName } from "../constants/constants";

const createArticle = async (
  name: string,
  qty: number,
  price: number,
  businessId: string
) => {
  const db = await initializeDb();
  const id = uuidv4();

  if (db) {
    await db[ArticlesCollectionName].insert({
      id,
      name,
      qty,
      selling_price: price,
      business_id: businessId,
    });
  }
};

export default createArticle;
