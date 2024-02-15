import Link from 'next/link';
import React from 'react';

const HelpInformations = () => {
	return (
		<section className="text-sm space-y-2 py-4 border-t-2 border-neutral-700 lg:text-base lg:py-8">
			<p className="text-neutral-300 leading-6 lg:leading-8">
				If the clothing I ordered doesn't meet my expectations, I would like to return it for a refund or exchange. I'll reach out to customer service to initiate the return process and ensure a smooth resolution. <br />
				<Link href="/contact" className="font-semibold hover:text-red-400 duration-200">
					Contact with me
				</Link>{' '}
				or{' '}
				<Link href="/faq" className="font-semibold hover:text-red-400 duration-200">
					Faq
				</Link>
			</p>
		</section>
	);
};

export default HelpInformations;
