import React from 'react';
import { NewsletterForm } from '@/components/landing/index';

const Newsletter = () => {
	return (
		<div className="col-span-2 aspect-video w-full max-w-4xl mx-auto max-h-40 bg-white bg-opacity-5 rounded-2xl p-4 sm:flex sm:flex-col sm:items-center sm:justify-center lg:p-6">
			<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
				SUBSCRIBE <br /> <span className="text-emerald-400">NEWSLETTER</span>
			</h2>
			<p className="text-sm leading-6 mt-2 sm:text-center lg:text-base lg:leading-8">For exclusive updates and special offers. Stay in the loop with the latest news delivered directly to your inbox.</p>
			<NewsletterForm />
		</div>
	);
};

export default Newsletter;
