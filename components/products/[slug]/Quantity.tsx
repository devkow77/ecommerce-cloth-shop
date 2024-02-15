'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuantity } from '@/lib/slice';

const Quantity = () => {
	const dispatch = useDispatch();

	return (
		<section>
			<h3 className="font-semibold mb-2 lg:text-lg">Select quantity</h3>
			<select name="quantity" id="quantity" typeof="number" className="w-16 p-2 bg-neutral-800" onChange={(e) => dispatch(setQuantity(e.target.value))}>
				{Array.from({ length: 10 }, (_, index) => (
					<option key={index} value={index + 1}>
						{index + 1}
					</option>
				))}
			</select>
		</section>
	);
};

export default Quantity;
