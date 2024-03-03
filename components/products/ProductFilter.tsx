'use client';

import React from 'react';
import { Filter } from '@/utils/Interfaces';

interface ProductFilterProps {
	filter: Filter;
	setFilter: (filter: Filter) => void;
	gender: boolean;
}

const products = {
	gender: [
		{ name: 'All', value: '' },
		{ name: 'Men', value: 'men' },
		{ name: 'Women', value: 'women' },
		{ name: 'Unisex', value: 'unisex' },
	],
	category: [
		{ name: 'All', value: '' },
		{ name: 'Hoodie', value: 'hoodie' },
		{ name: 'T-shirt', value: 't-shirt' },
		{ name: 'Tracksuit', value: 'tracksuit' },
		{ name: 'Longsleeve', value: 'longsleeve' },
		{ name: 'Jacket', value: 'jacket' },
	],
	sort: [
		{ name: 'Lowest - Highest', value: 'price_ASC' },
		{ name: 'Highest - Lowest', value: 'price_DESC' },
	],
};

const ProductFilter = ({ filter, setFilter, gender }: ProductFilterProps) => {
	return (
		<section>
			<div className="grid grid-cols-1 gap-6">
				{gender ? (
					<div>
						<h2 className="font-semibold mb-2">Gender</h2>
						<ul className="flex items-center gap-2 text-sm lg:text-base lg:gap-3">
							{products.gender.map(({ name, value }, index) => (
								<li key={index} className={`${filter.gender === value ? 'text-emerald-400 font-semibold' : ''} hover:text-emerald-400 duration-200 cursor-pointer`} onClick={() => setFilter({ ...filter, gender: value })}>
									{name}
								</li>
							))}
						</ul>
					</div>
				) : null}
				<div>
					<h2 className="font-semibold mb-2">Category</h2>
					<ul className="flex items-center flex-wrap gap-2 text-sm lg:text-base lg:gap-3">
						{products.category.map(({ name, value }, index) => (
							<li key={index} className={`${filter.product === value ? 'text-emerald-400 font-semibold' : ''} hover:text-emerald-400 duration-200 cursor-pointer`} onClick={() => setFilter({ ...filter, product: value })}>
								{name}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold mb-2">Sort</h2>
					<ul className="flex flex-col flex-wrap gap-2 text-sm lg:text-base lg:gap-2">
						{products.sort.map(({ name, value }, index) => (
							<li key={index} className={`${filter.sort === value ? 'text-emerald-400 font-semibold' : ''}  hover:text-emerald-400 duration-200 cursor-pointer`} onClick={() => setFilter({ ...filter, sort: value })}>
								{name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProductFilter;
