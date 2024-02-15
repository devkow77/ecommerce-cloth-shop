import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCard {
	id: string;
	slug: string;
	title: string;
	stripeApi: string;
	price: string;
	images: {
		url: string;
	}[];
	category: {
		name: string;
	};
	sales: boolean;
}

const ProductCard = ({ product }: { product: ProductCard }) => {
	return (
		<Link href={`/products/${product.slug}`} data-category={product.category.name}>
			<div className="relative aspect-square bg-neutral-800 rounded-2xl cursor-pointer">
				<Image src={product.images[0].url} alt={product.title} width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
			</div>
			<p className="text-xs mt-2 lg:text-sm lg:mt-4">
				{product.title} <br /> <span className="font-semibold">{product.price}PLN</span>
			</p>
		</Link>
	);
};

export default ProductCard;
