import { ArticlesCollectionName } from "../constants/constants";
import { RxDatabase } from "rxdb";

const getArticlesByBusiness = async (db: RxDatabase, businessId: string) => {
  try {
    const result = await db[ArticlesCollectionName].find()
      .where("business_id")
      .eq(businessId)
      .exec();

    return result;
  } catch (err) {
    console.log(err, "Error finding articles");
  }
};

export default getArticlesByBusiness;
