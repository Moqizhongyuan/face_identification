import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./modules/file";
import faceInfoReducer from "./modules/faceInfo";

const store = configureStore({
  reducer: {
    file: fileReducer,
    faceInfo: faceInfoReducer,
  },
});

export default store;
