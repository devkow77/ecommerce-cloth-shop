import React from 'react';
import { ProductCard } from '@/components/global/index';
import { Product } from '@/utils/Interfaces';
import { Search, Shirt } from 'lucide-react';

interface ProductListProps {
	products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
	return (
		<section className="py-6 sm:py-8">
			<h3 className="flex items-center gap-2 w-44 py-2 font-semibold text-center lg:text-lg mx-auto">
				<Search /> Your products
			</h3>
			<div className="grid grid-cols-2 gap-4 my-8 sm:grid-cols-4 md:grid-cols-5">
				{products.length ? (
					products.map((product: any) => <ProductCard product={product} key={product.id} />)
				) : (
					<div className="col-span-2 flex flex-col items-center pt-6 sm:col-span-4 md:col-span-5 lg:col-span-6">
						<Shirt size={80} className="lg:scale-125" />
						<h1 className="font-extrabold text-center mt-6 mb-2 lg:text-lg">No products 😢</h1>
						<p className="text-sm text-slate-300 text-center lg:text-base">Looks like there are no products in this category yet.</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProductList;
