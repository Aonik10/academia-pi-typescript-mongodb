"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
    display: boolean;
}

const initialState: modalState = {
    display: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setDisplay: (state, action) => {
            state.display = action.payload;
        },
    },
});

export const { setDisplay } = modalSlice.actions;

export default modalSlice.reducer;
