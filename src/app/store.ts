import {configureStore} from '@reduxjs/toolkit';
import demoReducer from './demoReducer';

export const store = configureStore({
    reducer: demoReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;