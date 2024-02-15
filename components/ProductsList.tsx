import React from 'react';
import { ProductCard } from '@/components/index';
import { Product, Filter } from '@/utils/Interfaces';

interface ProductListProps {
	products: Product[];
	title: Filter;
}

const ProductList = ({ products, title }: ProductListProps) => {
	return (
		<section className="py-6 sm:py-8">
			{/* <h3 className="font-bold text-center lg:text-lg">{title.gender ? `${title.gender} ${title.product}`.toUpperCase() : `All ${title.product}`.toUpperCase()}</h3> */}
			<div className="grid grid-cols-2 gap-4 mt-4 mb-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
				{products.length ? products.map((product: any) => <ProductCard product={product} key={product.id} />) : <p className="font-bold">No Products</p>}
			</div>
		</section>
	);
};

export default ProductList;
