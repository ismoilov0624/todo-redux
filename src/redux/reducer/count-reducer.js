import { createSlice } from "@reduxjs/toolkit";

//initialState obyekt korinishida boladi state joylab boriladi
const initialState = {
  count: 0,
};

/////////////////////////////funksiya argument sifatida obyekt ketadi
const countSlice = createSlice({
  name: "counter", ////name bolishi speacial, redux qayerda change bolayotganini cashlash uchun, namega qarab interface update
  initialState,
  reducers: {
    //funksiya korinishida logikalar yoziladi
    // 2 ta parametr keladi, state initialState dan qiymant oladi
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
  },
});

export default countSlice.reducer;

export const { decrement, increment } = countSlice.actions;
