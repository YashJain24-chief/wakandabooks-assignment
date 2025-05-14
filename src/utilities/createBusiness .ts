import initializeDb from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { BusinessCollectionName } from "../constants/constants";
import { RxDatabase } from "rxdb";
import { addBusiness } from "../redux/slices/businessSlice";
import { AppDispatch } from "../redux/store";

const createBusiness = async (
  db: RxDatabase,
  name: string,
  dispatch: AppDispatch
) => {
  try {
    const id = uuidv4();
    const newBusiness = { id, name };
    await db[BusinessCollectionName].insert(newBusiness);
    dispatch(addBusiness(newBusiness));
  } catch (err) {
    console.log(err, "Error creating a business..");
  }
};

export default createBusiness;
