import { createSlice } from "@reduxjs/toolkit";

const fileSclice = createSlice({
  name: "detail",
  initialState: {
    fileInfo: "",
    fileImg: "",
  },
  reducers: {
    changeFileInfoAction(state, { payload }) {
      state.fileInfo = payload;
    },
    changeFileImgAction(state, { payload }) {
      state.fileImg = payload;
    },
  },
});

export const { changeFileInfoAction, changeFileImgAction } = fileSclice.actions;

export default fileSclice.reducer;
