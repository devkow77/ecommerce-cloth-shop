'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Images {
	images: {
		url: string;
	}[];
}

const Gallery = ({ images }: Images) => {
	const [activeImage, setActiveImage] = useState<string>(images[0].url);

	return (
		<section className="max-w-[400px]">
			<div className="relative aspect-square rounded-2xl w-full cursor-pointer overflow-hidden">
				<Image src={activeImage} alt="product image" width={400} height={400} className="absolute w-full h-full rounded-2xl object-cover object-center hover:scale-125 duration-200" />
			</div>
			<div className="grid grid-cols-4 gap-2 mt-4">
				<Image onClick={() => setActiveImage(images[0].url)} src={images[0].url} alt="product image" width={200} height={200} className="aspect-square rounded-2xl object-cover object-center cursor-pointer" />
				<Image onClick={() => setActiveImage(images[1].url)} src={images[1].url} alt="product image" width={200} height={200} className="aspect-square rounded-2xl object-cover object-center cursor-pointer" />
				<Image onClick={() => setActiveImage(images[2].url)} src={images[2].url} alt="product image" width={200} height={200} className="aspect-square rounded-2xl object-cover object-center cursor-pointer" />
				<Image onClick={() => setActiveImage(images[3].url)} src={images[3].url} alt="product image" width={200} height={200} className="aspect-square rounded-2xl object-cover object-center cursor-pointer" />
			</div>
		</section>
	);
};

export default Gallery;
