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
					<h2 className="font-semibold mb-2">Gender</h2>
					<ul className="flex items-center gap-2 text-sm">
						{products.gender.map((gender, index) => (
							<li key={index} className="hover:text-emerald-400 duration-200 cursor-pointer">
								{gender}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold mb-2">Category</h2>
					<ul className="flex items-center flex-wrap gap-2 text-sm">
						{products.category.map((category, index) => (
							<li key={index} className="hover:text-emerald-400 duration-200 cursor-pointer">
								{category}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold mb-2">Sort</h2>
					<ul className="flex flex-col flex-wrap gap-2 text-sm">
						{products.sort.map((sort, index) => (
							<li key={index} className="hover:text-emerald-400 duration-200 cursor-pointer">
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
