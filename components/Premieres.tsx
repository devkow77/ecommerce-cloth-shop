import React from 'react';
import Link from 'next/link';
import { PremieresCarousel } from '@/components/index';

function Premieres() {
	return (
		<section>
			<div className="flex items-end justify-between">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					THE NEWEST <br /> <span className="text-red-400">PREMIERES</span>
				</h2>
				<h3 className="text-xs opacity-80 hover:opacity-100 duration-200 sm:text-sm">
					<Link href="/premieres">View All Products</Link>
				</h3>
			</div>
			<PremieresCarousel />
		</section>
	);
}

export default Premieres;
