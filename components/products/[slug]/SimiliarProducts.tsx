import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

interface Products {
	products: {
		id: string;
		slug: string;
		title: string;
		price: string;
		images: {
			url: string;
		}[];
	}[];
}

const SimiliarProducts = ({ products }: Products) => {
	return (
		<section>
			<h3 className="font-semibold mb-4 lg:text-lg">Similiar products ({products.length})</h3>
			{products.length ? <ProductsCarousel products={products} /> : <h3 className="font-semibold lg:text-lg text-red-400">Currently no products 😢</h3>}
		</section>
	);
};

const ProductsCarousel = ({ products }: Products) => {
	return (
		<Carousel className="w-full">
			<CarouselContent className="rounded-2xl">
				{products.map((product, index) => (
					<CarouselItem key={index} className="rounded-2xl max-w-[250px]">
						<Link href={`/products/${product.slug}`}>
							<div className="relative flex aspect-square rounded-2xl items-center justify-center p-6 dark:bg-neutral-800">
								<Image src={product.images[0].url} alt="product image" width={300} height={300} className="absolute w-full h-full rounded-2xl object-cover object-center" />
								<div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl hover:bg-opacity-20 duration-200" />
								<div className="absolute bottom-3 left-0 px-4">
									<h1 className="font-semibold">{product.title}</h1>
									<h2>Price: {Number(product.price).toPrecision(5)} PLN</h2>
								</div>
							</div>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default SimiliarProducts;
