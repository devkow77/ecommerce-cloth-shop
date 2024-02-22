import React from 'react';
import { GraphQLClient } from 'graphql-request';
import { NewsInterface } from '@/utils/Interfaces';
import { Content, SimiliarNews } from '@/components/news/[slug]';

interface GraphQLResponse {
	news: NewsInterface;
	newsAll: NewsInterface[];
}

const getUniqueNews = async (slug: string) => {
	const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API_KEY as string);

	const { news, newsAll }: GraphQLResponse = await hygraph.request(`
       query MyQuery {
            news(where: {slug: "${slug}"}) {
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
            newsAll(
                where: {slug_not: "${slug}"}
            ) {
                slug
                image {
                url
                }
                title
                date
            }
        }
    `);

	return { news, newsAll };
};

const UniqueNews = async ({ params: { slug } }: { params: { slug: string } }) => {
	const { news, newsAll } = await getUniqueNews(slug);

	return (
		<article>
			<div className="max-w-7xl mx-auto p-6 space-y-6">
				<Content news={news} />
				<SimiliarNews news={newsAll} />
			</div>
		</article>
	);
};

export default UniqueNews;
