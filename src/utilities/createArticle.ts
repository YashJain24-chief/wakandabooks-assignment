import initializeDb from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { ArticlesCollectionName } from "../constants/constants";
import { RxDatabase } from "rxdb";
import { AppDispatch } from "../redux/store";
import { addArticle } from "../redux/slices/articleSlice";

const createArticle = async (
  db: RxDatabase,
  dispatch: AppDispatch,
  name: string,
  qty: number,
  price: number,
  businessId: string
) => {
  try {
    const id = uuidv4();

    const newArticle = {
      id,
      name,
      qty,
      selling_price: price,
      business_id: businessId,
    };

    await db[ArticlesCollectionName].insert(newArticle);
    dispatch(addArticle(newArticle));
  } catch (err) {
    console.log(err, "Error creating an article..");
  }
};

export default createArticle;
