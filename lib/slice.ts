import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'productState',
	initialState: {
		size: '',
		quantity: 1,
	},
	reducers: {
		setSize: (state, action) => {
			return { ...state, size: action.payload };
		},
		setQuantity: (state, action) => {
			return { ...state, quantity: action.payload as number };
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSize, setQuantity } = productSlice.actions;

export default productSlice.reducer;
