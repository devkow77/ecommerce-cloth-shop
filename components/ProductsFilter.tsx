'use client';

import React from 'react';
import { Filter } from '@/utils/Interfaces';

interface ProductFilterProps {
	filter: Filter;
	setFilter: (filter: Filter) => void;
}

const products = {
	gender: ['All', 'Men', 'Women', 'Unisex'],
	category: ['Hoodie', 'T-shirt', 'Tracksuit', 'Longsleeve', 'Jacket'],
	sort: ['Lowest - Highest', 'Highest - Lowest'],
};

const ProductFilter = ({ filter, setFilter }: ProductFilterProps) => {
	return (
		<section>
			<div className="grid grid-cols-1 gap-6">
				<div>
					<h2 className="font-semibold text-center mb-4">Gender</h2>
					<ul className="flex items-center justify-center gap-2">
						{products.gender.map((gender, index) => (
							<li key={index} className="hover:text-red-400 duration-200 cursor-pointer">
								{gender}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold text-center mb-4">Category</h2>
					<ul className="flex items-center justify-center flex-wrap gap-2">
						{products.category.map((category, index) => (
							<li key={index} className="hover:text-red-400 duration-200 cursor-pointer">
								{category}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold text-center mb-4">Sort</h2>
					<ul className="flex flex-col items-center flex-wrap gap-2">
						{products.sort.map((sort, index) => (
							<li key={index} className="hover:text-red-400 duration-200 cursor-pointer">
								{sort}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProductFilter;
