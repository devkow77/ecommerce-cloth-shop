import { ProductCard } from '@/components/global';
import React from 'react';
import { GraphQLClient } from 'graphql-request';

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
			</div>
		</main>
	);
};

export default PremieresPage;
