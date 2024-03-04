import { ProductCard } from '@/components/global';
import React from 'react';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

interface Premiere {
	id: string;
	images: {
		url: string;
	};
	price: string;
	slug: string;
	title: string;
	category: {
		name: string;
	};
}

interface Premieres {
	products: Premiere[];
}

const getPremieres = async () => {
	const { products }: Premieres = await hygraph.request(`
		query MyQuery {
				products(orderBy: publishedAt_ASC) {
					id
					images {
						url
					}
					price
					slug
					title
					category {
						name
					}
				}
			}
	`);

	return { products };
};

const PremieresPage = async () => {
	const { products }: Premieres = await getPremieres();

	return (
		<main>
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-2xl font-black mb-4 md:text-3xl xl:text-4xl">
					PREMIERES <br /> <span className="text-emerald-400">PRODUCTS</span>
				</h2>
				<section>
					<div className="grid grid-cols-2 gap-4 my-8 sm:grid-cols-4">
						{products.map((product: any) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				</section>
				<section>
					<p className="text-sm leading-7 py-4 lg:text-base lg:leading-8">
						If you wanna see all products in our shop check other section by clicking{' '}
						<Link href="/products" className="font-semibold hover:text-emerald-500 duration-200">
							here
						</Link>
						.
					</p>
				</section>
			</div>
		</main>
	);
};

export default PremieresPage;
