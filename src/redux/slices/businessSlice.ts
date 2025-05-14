import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Business {
  id: string;
  name: string;
}

interface BusinessState {
  businessesList: Business[];
}

const initialState: BusinessState = {
  businessesList: [],
};

const businessSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    setBusinesses(state, action: PayloadAction<Business[]>) {
      state.businessesList = action.payload;
    },
    addBusiness(state, action: PayloadAction<Business>) {
      state.businessesList.push(action.payload);
    },
  },
});

export const { setBusinesses, addBusiness } = businessSlice.actions;
export default businessSlice.reducer;
