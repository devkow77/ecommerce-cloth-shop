'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSize } from '@/lib/slice';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const Sizes = () => {
	const [productSize, setProductSize] = useState<string>('');
	const dispatch = useDispatch();

	const handleProductSize = (size: string) => {
		setProductSize(size);
		dispatch(setSize(size));
	};

	return (
		<section>
			<h3 className="font-semibold mb-2 lg:text-lg">Select size</h3>
			<ul className="flex items-center gap-2 flex-wrap">
				{sizes.map((size, index) => (
					<li onClick={() => handleProductSize(size)} key={index} className={`${productSize === size ? 'bg-red-400' : 'bg-neutral-800'} px-4 py-2 rounded-2xl hover:bg-red-400 duration-200 cursor-pointer lg:text-lg`}>
						{size}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Sizes;
