import React from 'react';

interface Introduction {
	category: {
		name: string;
	};
	title: string;
	price: string;
}

const Introduction = ({ category, title, price }: Introduction) => {
	return (
		<section>
			<h2 className="text-neutral-300 lg:text-lg">{category.name}</h2>
			<h1 className="font-extrabold max-w-lg mb-2 text-2xl lg:text-4xl">{title}</h1>
			<h3 className="lg:text-lg">
				Price: <span className="font-semibold">{Number(price).toPrecision(5)}</span> PLN
			</h3>
		</section>
	);
};

export default Introduction;
