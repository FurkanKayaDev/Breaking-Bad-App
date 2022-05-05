import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./characterSlice/characterSlice";
import detailSlice  from "./DetailSlice/detailSlice";

export const store = configureStore({
    reducer: {
        characters: characterSlice,
        details: detailSlice,
    },
});