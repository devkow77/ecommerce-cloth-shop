import React from 'react';
import NewsCard from '@/components/news/NewsCard';
import { GraphQLClient } from 'graphql-request';
import { NewsInterface } from '@/utils/Interfaces';

interface GraphQLResponse {
	newsAll: NewsInterface[];
}

const getNews = async () => {
	const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

	const { newsAll }: GraphQLResponse = await hygraph.request(`
        query MyQuery {
			newsAll {
				slug
				image {
				url
				}
				title
				content {
					html
				}
				date
			}
		}
    `);

	return newsAll;
};

const NewsList = async () => {
	const news = await getNews();

	return (
		<section className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{news.map((news: NewsInterface) => (
				<NewsCard href={`/news/${news.slug}`} news={news} key={news.id} />
			))}
		</section>
	);
};

export default NewsList;
