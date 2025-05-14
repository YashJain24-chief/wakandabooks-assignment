import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  id: string;
  name: string;
  qty: number;
  selling_price: number;
  business_id: string;
}

interface ArticleState {
  articlesList: Article[];
}

const initialState: ArticleState = {
  articlesList: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articlesList = action.payload;
    },
    addArticle(state, action: PayloadAction<Article>) {
      state.articlesList.push(action.payload);
    },
  },
});

export const { setArticles, addArticle } = articleSlice.actions;
export default articleSlice.reducer;
