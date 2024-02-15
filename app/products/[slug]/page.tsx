import React from 'react';
import { GraphQLClient } from 'graphql-request';
import { Product } from '@/utils/Interfaces';
import { Gallery, Introduction, Sizes, Quantity, Description, Guarantees, Checkout, SimiliarProducts, HelpInformations } from '@/components/products/[slug]/index';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

interface UniqueProduct {
	product: Product;
	products: Product[];
}

const getProduct = async (slug: string, category: string) => {
	const { product, products: similiarProducts }: UniqueProduct = await hygraph.request(`
      query MyQuery {
		product(
			where: {
				slug: "${slug}"
			}
		) 
		{
			id
			slug
			title
			stripeApi
			price
			images {
				url
			}
			description
			createdAt
			gender {
				name
			}
			category {
				name
			}
			bio
		}
		products(
			where: {
				slug_not: "${slug}",
				AND: {
					category: {
						_search: "${category}"
					}
				}
			}
		)
		{
			id
			slug
			title
			price
			images {
				url
			}
			bio
		}
	  }
    `);

	return { product, similiarProducts };
};
const UniqueProduct = async ({ params: { slug } }: { params: { slug: string } }) => {
	const { product, similiarProducts } = await getProduct(slug, 'hoodie');

	return (
		<main>
			<div className="max-w-7xl mx-auto px-6 space-y-6">
				<section className="flex flex-col gap-6 sm:flex-row">
					<Gallery images={product.images} />
					<div className="space-y-4">
						<Introduction category={product.category} title={product.title} price={product.price} />
						<Sizes />
						<Quantity />
					</div>
				</section>
				<section className="space-y-8">
					<Description description={product.description} />
					<Guarantees />
					<Checkout product={product} />
					<SimiliarProducts products={similiarProducts} />
					<HelpInformations />
				</section>
			</div>
		</main>
	);
};

export default UniqueProduct;

// const buyProduct = async (e: React.MouseEvent) => {
// 	e.preventDefault();
// 	const { data } = await axios.post(
// 		'/api/payment',
// 		{
// 			priceId: product.stripeApi,
// 		},
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}
// 	);

// 	window.location.assign(data);
// };
