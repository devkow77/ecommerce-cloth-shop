import React from 'react';
import { Introduction, NewsList } from '@/components/news';

const News = () => {
	return (
		<article>
			<div className="max-w-7xl mx-auto p-6">
				<Introduction />
				<NewsList />
			</div>
		</article>
	);
};

export default News;
