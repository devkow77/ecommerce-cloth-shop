'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSize } from '@/lib/slice';
import { RootState } from '@/lib/store';

const Redux = () => {
	const size = useSelector((state: RootState) => state.product.size);
	const dispatch = useDispatch();

	return (
		<main>
			<div>
				<div className="max-w-7xl mx-auto space-x-6">
					<button aria-label="Increment value" onClick={() => dispatch(setSize('M'))}>
						M
					</button>
					<button aria-label="Increment value" onClick={() => dispatch(setSize('L'))}>
						L
					</button>
					<button aria-label="Increment value" onClick={() => dispatch(setSize('XL'))}>
						XL
					</button>
					<button aria-label="Increment value" onClick={() => dispatch(setSize('XXL'))}>
						XXL
					</button>
					<span>SIZE: {size}</span>
				</div>
			</div>
		</main>
	);
};

export default Redux;
