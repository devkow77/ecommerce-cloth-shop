import React from 'react';
import Image from 'next/image';

const Content = ({ news }: any) => {
	return (
		<section>
			<h2 className="text-2xl max-w-2xl font-black md:text-3xl xl:text-4xl">{news.title}</h2>
			<h3 className="font-semibold mt-2 lg:mt-4">Created at: {news.date} 🕛</h3>
			<div className="relative aspect-video max-w-xl rounded-2xl bg-neutral-800 mt-4 lg:mt-6">
				<Image src={news.image.url} alt={news.title} width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
			</div>
			<div dangerouslySetInnerHTML={{ __html: news.content.html }} className="text-sm leading-7  mt-4 lg:text-base lg:leading-8 lg:mt-6" />
		</section>
	);
};

export default Content;
