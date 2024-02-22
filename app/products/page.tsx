'use client';

import React, { useState, useEffect } from 'react';
import { ProductFilter, ProductList } from '@/components/products/index';
import { Product, Filter } from '@/utils/Interfaces';

const Products = () => {
	const [filter, setFilter] = useState<Filter>({
		gender: '',
		product: '',
		sort: 'price_ASC',
	});

	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const { gender, product, sort } = filter;
		fetch(`/api/products?gender=${gender}&product=${product}&sort=${sort}`)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err));
	}, [filter.gender, filter.product, filter.sort]);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-6 pt-8">
				<h2 className="text-2xl font-black mb-4 md:text-3xl xl:text-4xl">
					ALL <br /> <span className="text-emerald-400">PRODUCTS</span>
				</h2>
				<ProductFilter filter={filter} setFilter={setFilter} />
				<ProductList products={products} title={filter} />
			</div>
		</main>
	);
};

export default Products;
