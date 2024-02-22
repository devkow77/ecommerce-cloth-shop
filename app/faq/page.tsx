import React from 'react';
import { AccordionFaq } from '@/components/faq/AccordionFaq';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Faq = () => {
	return (
		<main>
			<div className="max-w-7xl mx-auto p-6">
				<h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
					FAQ <br /> <span className="text-emerald-400">FREQUENTLY ASKED</span> <br /> QUESTIONS
				</h2>
				<AccordionFaq />
				<p className="text-sm leading-6 opacity-80 mb-4 lg:text-base lg:leading-8">
					If the FAQ section does not address your queries adequately, feel free to reach out to us by using the contact form. We are here to assist you and will respond promptly to ensure all your concerns are addressed.
				</p>
				<Link href="/contact">
					<Button>Contact with us</Button>
				</Link>
			</div>
		</main>
	);
};

export default Faq;
