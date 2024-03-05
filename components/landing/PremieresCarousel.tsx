import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

export const PremieresCarousel = async () => {
	const { products }: any = await hygraph.request(`
		query MyQuery {
			products(orderBy: publishedAt_ASC, first: 10) {
				id
				images {
				url
				}
				price
				slug
				title
			}
		}
	`);

	return (
		<Carousel className="w-full mt-4">
			<CarouselContent>
				{products &&
					products.map((premiere: any, index: number) => (
						<CarouselItem key={index} className="basis-1/2 cursor-pointer sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
							<div>
								<Card className="rounded-2xl">
									<Link href={`/products/${premiere.slug}`}>
										<CardContent className="relative aspect-square rounded-2xl">
											<Image src={premiere.images[0].url} alt={premiere.title} width={600} height={600} className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-2xl " />
											<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-2xl hover:bg-opacity-20 duration-200" />
											<div className="absolute bottom-3 left-0 px-4">
												<h1 className="text-xs lg:text-base font-semibold">{premiere.title}</h1>
												<h2 className="text-xs lg:text-sm">Price: {Number(premiere.price).toPrecision(5)} PLN</h2>
											</div>
										</CardContent>
									</Link>
								</Card>
							</div>
						</CarouselItem>
					))}
			</CarouselContent>
		</Carousel>
	);
};
