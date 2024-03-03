import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header>
			<h2 className="text-3xl font-black text-slate-400 dark:text-white md:text-4xl lg:text-5xl xl:text-6xl">
				FENDIE <br /> <span className="text-slate-300 dark:text-emerald-400">BEST</span> CLOTHES <br /> IN NEW YORK{' '}
			</h2>
			<section className="grid grid-cols-4 grid-rows-4 gap-4 h-[25rem] rounded-2xl mt-4 mb-8 lg:h-[28rem]">
				<div className="relative col-span-4 row-span-3 bg-neutral-700 rounded-2xl overflow-hidden sm:col-span-2 sm:row-span-4">
					<Image src="/main.jpg" alt="woman with hoodie" width={1000} height={1000} className="absolute w-full h-full object-cover object-center rounded-2xl" />
				</div>
				<div className="relative col-span-2 bg-neutral-700 rounded-2xl sm:row-span-2">
					<Link href="/products/men">
						<Image src="/men.jpg" alt="men products section image" width={600} height={600} className="absolute w-full h-full object-cover object-center rounded-2xl" />
						<div className="absolute w-full h-full bg-black bg-opacity-80 rounded-2xl flex items-center justify-center">
							<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">MEN</h3>
						</div>
					</Link>
				</div>
				<div className="relative col-span-2 bg-neutral-700 rounded-2xl sm:row-span-2">
					<Link href="/products/women">
						<Image src="/women.jpg" alt="women products section image" width={600} height={600} className="absolute w-full h-full object-cover rounded-2xl object-center" />
						<div className="absolute w-full h-full bg-black bg-opacity-80 rounded-2xl flex items-center justify-center">
							<h3 className="text-lg font-extrabold text-white sm:text-2xl xl:text-4xl">WOMEN</h3>
						</div>
					</Link>
				</div>
			</section>
			<section>
				<p className="text-sm leading-7 text-center max-w-4xl mx-auto lg:text-base lg:leading-8">
					Fendie, a distinctive and imaginative online boutique, specializes in offering a unique collection of hoodies that capture the essence of old-world charm and timeless style. Each hoodie from Fendie is meticulously designed to evoke a
					sense of nostalgia, drawing inspiration from vintage aesthetics and classic craftsmanship. The carefully curated selection reflects a commitment to quality, blending modern comfort with the enduring appeal of old-style fashion.
				</p>
			</section>
		</header>
	);
};

export default Header;
