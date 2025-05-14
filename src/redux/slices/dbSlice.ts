import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RxDatabase } from "rxdb";

interface RxDB {
  db?: RxDatabase;
}

const initialState: RxDB = {
  db: undefined,
};

const rxDBSlice = createSlice({
  name: "RxDB",
  initialState,
  reducers: {
    setRxDB(state, action: PayloadAction<any>) {
      state.db = action.payload;
    },
  },
});

export const { setRxDB } = rxDBSlice.actions;
export default rxDBSlice.reducer;
