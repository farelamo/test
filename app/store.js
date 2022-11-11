import { configureStore } from "@reduxjs/toolkit";
import { tambahkurang } from "../components/index.slice";
import inquiryReducer from "../components/inquiry.slice";

export const store = configureStore({
    reducer: {
        [tambahkurang.name]: tambahkurang.reducer,
        inquiry: inquiryReducer
    }
})