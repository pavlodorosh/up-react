import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value : 0,
        text: 'lessons redux'
    },
    reducers:{
        increment: state => {
            state.value += 1;
        },
        showConsole: state => {
            state.text = 'Hello';
        }
    },
});

export const { increment, showConsole} = counterSlice.actions;

export const selectCount = state => state.counter.value;
export const selectText = state => state.counter.text;

export default counterSlice.reducer;