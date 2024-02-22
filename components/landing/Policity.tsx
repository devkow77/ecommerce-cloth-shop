import React from 'react';
import { PolicityCards } from '@/components/landing/index';

const Policity = () => {
	return (
		<article>
			<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
				OUR SHOP <br /> <span className="text-emerald-400">POLICITY</span>
			</h2>
			<PolicityCards />
		</article>
	);
};

export default Policity;
