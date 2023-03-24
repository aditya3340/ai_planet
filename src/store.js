import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "./Components/submissionSlice"


export const store =  configureStore({
    reducer: {
        submissions: submissionReducer
    },
}) 