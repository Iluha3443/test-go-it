import { createSlice } from "@reduxjs/toolkit";

const state = {
    favoritesCar: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: state,
    reducers: {
        addToFavorites: (state, { payload }) => (
            {
             favoritesCar: [...state.favoritesCar, payload]
            }),
    }
});

export const { addToFavorites } = favoriteSlice.actions;