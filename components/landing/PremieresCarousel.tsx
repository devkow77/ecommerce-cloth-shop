import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

export async function PremieresCarousel() {
	const { products }: any = await hygraph.request(`
		query MyQuery {
			products {
				id
				slug
				title
				price
				images {
					url
				}
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
								<Card className="rounded-full">
									<CardContent className="relative aspect-square dark:bg-neutral-800 bg-slate-300 rounded-2xl">
										<div className="absolute bottom-4 text-xs lg:text-sm text-white">
											<h4>{premiere.title}</h4>
											<p>{premiere.price}PLN</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
			</CarouselContent>
		</Carousel>
	);
}
