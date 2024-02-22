import React from 'react';
import { NewsInterface } from '@/utils/Interfaces';
import { NewsCard } from '../index';

interface News {
	news: NewsInterface[];
}

const SimiliarNews = ({ news }: News) => {
	return (
		<section>
			<h3 className="font-semibold lg:text-lg">Similiar News</h3>
			<section className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{news.length && news.map((news: NewsInterface) => <NewsCard href={`/news/${news.slug}`} news={news} />)}</section>
		</section>
	);
};

export default SimiliarNews;
