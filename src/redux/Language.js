import { createSlice } from "@reduxjs/toolkit";

const Language = createSlice({
    name:"lang",
    initialState:{Lang:"en"},
    reducers:{
        addLang(state, action){
            state.Lang= action.payload;
        }
    }
})
export const {addLang} = Language.actions;
export default Language.reducer;