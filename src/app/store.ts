import { configureStore } from "@reduxjs/toolkit";
import contatosSlice from '../features/contatos/contatosSlice';

export const store = configureStore({
    reducer: {
        contatos: contatosSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;