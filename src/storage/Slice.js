import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            console.log(action);
        }
    }
});

export const { addToFavorites } = favoriteSlice.actions;