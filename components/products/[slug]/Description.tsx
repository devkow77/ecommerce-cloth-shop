import React from 'react';

interface Description {
	description: string;
}

const Description = ({ description }: Description) => {
	return (
		<section>
			<h3 className="font-semibold mb-2 lg:text-lg">Description</h3>
			<p className="text-sm leading-7 lg:text-base lg:leading-8">{description}</p>
		</section>
	);
};

export default Description;
