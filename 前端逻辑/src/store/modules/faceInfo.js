import { createSlice } from "@reduxjs/toolkit";

const faceInfoSlice = createSlice({
  name: "faceInfo",
  initialState: {
    faceInfo: [],
  },
  reducers: {
    changeFaceInfoAction(state, { payload }) {
      // console.log(payload);
      state.faceInfo = payload;
    },
  },
});

export const { changeFaceInfoAction } = faceInfoSlice.actions;

export default faceInfoSlice.reducer;
