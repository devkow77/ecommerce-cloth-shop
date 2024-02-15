import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Help = () => {
	return (
		<section className="flex items-center gap-4">
			<div className="relative aspect-video w-full max-h-48  rounded-2xl cursor-pointer">
				<Link href="/contact">
					<div className="w-full h-full hover:bg-red-300 rounded-2xl flex items-center justify-center duration-500">
						<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">FAQ</h3>
					</div>
				</Link>
			</div>
			<div className="relative aspect-video w-full max-h-48 rounded-2xl cursor-pointer">
				<Link href="/faq">
					<div className="w-full h-full hover:bg-red-300 rounded-2xl flex items-center justify-center duration-500">
						<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">CONTACT</h3>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Help;
