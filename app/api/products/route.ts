import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

export async function GET(req: NextRequest) {
	const gender = req.nextUrl.searchParams.get('gender');
	const product = req.nextUrl.searchParams.get('product');
	const sort = req.nextUrl.searchParams.get('sort');

	const { products: result }: any = await hygraph.request(`
		query MyQuery {
			products(
				where: {
					gender: { name_starts_with: "${gender}" },
					category: { name_starts_with: "${product}" },
				}
				orderBy: ${sort}
			){
				id
				slug
				title
				price
				stripeApi
				images {
					url
				}
				category {
					name
				}
				sales
				bio
			}
		}
	`);

	return NextResponse.json(result);
}
