import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className="max-w-7xl mx-auto">
				<div className="h-[2px] dark:bg-neutral-800 bg-slate-200" />
				<section className="grid grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-3 lg:py-8">
					<div>
						<h1 className="font-semibold lg:text-lg">Fendie</h1>
						<p className="text-sm mt-2 leading-6 opacity-80 xl:text-base xl:leading-8">
							Wrap yourself in style with our premium hoodies, where comfort meets fashion. Elevate your wardrobe with quality and warmth your perfect companion for every season
						</p>
					</div>
					<div className="lg:mx-auto">
						<h3 className="font-semibold lg:text-lg">Links</h3>
						<ul className="text-sm mt-2 space-y-2 xl:text-base">
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/products">Products</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/men">Men</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/women">Women</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/sales">Sales</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/news">News</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/faq">Faq</Link>
							</li>
							<li className="hover:text-emerald-400 duration-200">
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="lg:flex lg:flex-col lg:items-end">
						<h3 className="font-semibold lg:text-lg">Socials</h3>
						<div className="flex items-center gap-4 mt-2">
							<Link href="https://www.instagram.com" target="_blank">
								<div className="p-2 dark:bg-neutral-800 bg-slate-300 rounded-2xl dark:hover:bg-emerald-400 hover:bg-slate-500 duration-200 xl:text-xl">
									<FaInstagram />
								</div>
							</Link>
							<Link href="https://www.facebook.com" target="_blank">
								<div className="p-2 dark:bg-neutral-800 bg-slate-300 rounded-2xl dark:hover:bg-emerald-400 hover:bg-slate-500 duration-200 xl:text-xl">
									<FaFacebookF />
								</div>
							</Link>
							<Link href="https://twitter.com" target="_blank">
								<div className="p-2 dark:bg-neutral-800 bg-slate-300 rounded-2xl dark:hover:bg-emerald-400 hover:bg-slate-500 duration-200 xl:text-xl">
									<FaTwitter />
								</div>
							</Link>
						</div>
					</div>
				</section>
			</div>
			<div>
				<div className="h-[2px] dark:bg-neutral-800 bg-slate-200" />
				<p className="text-sm leading-6 text-center py-4 px-4 xl:text-base xl:leading-8">
					Fendie shop is unofficial website created for self purposes by{' '}
					<span className="font-semibold">
						<Link href="https://github.com/devkow77" target="_blank">
							devkow77
						</Link>
					</span>
					. All rights reserved 2023 December &copy;
				</p>
			</div>
		</footer>
	);
};

export default Footer;
