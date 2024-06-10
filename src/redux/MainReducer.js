import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./InitialState";

export const MainReducer = createSlice({
    name : 'MAIN_SLICE',
    initialState : InitialState,
    reducers:{
        changeStateValue: (state, action) => {
            console.log(action);
            state[action.payload.name] = action.payload.value
        }
    }
})

export const Data = MainReducer.reducer;
export const {changeStateValue} = MainReducer.actions;

