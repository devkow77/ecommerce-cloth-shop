import React from 'react';

const guarantees = ['Free Returns 🛒', 'Fast Delivery 🚚', 'Quality Guarantee 🌟', 'Secure Checkout 🛡️', '24/7 Customer Support 🕜'];

const Guarantees = () => {
	return (
		<section>
			<h3 className="font-semibold mb-2 lg:text-lg">What we guarantee</h3>
			<ul className="list-disc text-sm ml-4 space-y-2 lg:text-base lg:space-y-3">
				{guarantees.map((info, index) => (
					<li key={index}>{info}</li>
				))}
			</ul>
		</section>
	);
};

export default Guarantees;
