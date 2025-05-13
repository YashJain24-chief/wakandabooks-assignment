import initializeDb from "../db/db";
import { ArticlesCollectionName } from "../constants/constants";

const getArticlesByBusiness = async (businessId: string) => {
  const db = await initializeDb();

  if (db) {
    return db[ArticlesCollectionName].find()
      .where("business_id")
      .eq(businessId)
      .exec();
  }
};

export default getArticlesByBusiness;
