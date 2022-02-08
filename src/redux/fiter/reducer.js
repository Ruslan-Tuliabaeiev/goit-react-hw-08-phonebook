
import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./action";

export const filterReducer = createReducer('', {
    // eslint-disable-next-line no-sequences
    [filterContacts]: (state, { payload }) => (state, payload),
    
})



