import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { favoriteSlice } from './Slice';

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice.reducer
    },
})