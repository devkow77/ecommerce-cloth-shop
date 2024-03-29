import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice';

export const store = () => {
	return configureStore({
		reducer: {
			product: productReducer,
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
