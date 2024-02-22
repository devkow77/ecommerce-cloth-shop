import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsInterface } from '@/utils/Interfaces';

interface News {
	news: NewsInterface;
	href: string;
}

const NewsCard = ({ news, href }: News) => {
	return (
		<Link href={href} key={news.id}>
			<div className="relative aspect-video rounded-2xl">
				<Image src={news.image.url} alt={news.title} width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
				<div className="absolute w-full h-full bg-black/60 rounded-2xl text-sm p-4 flex flex-col justify-end hover:bg-black/40 duration-300">
					<h3 className="font-semibold">{news.title}</h3>
					<p>{new Date(news.date).toDateString()}</p>
				</div>
			</div>
		</Link>
	);
};

export default NewsCard;
