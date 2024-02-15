'use client';

import React from 'react';
import { DesktopNavigation, ThemeToggle, HamburgerMenu } from '@/components/index';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';
import { useShoppingCart } from 'use-shopping-cart';

const Navbar = () => {
	const { handleCartClick } = useShoppingCart();
	return (
		<nav>
			<div className="max-w-7xl mx-auto py-8 px-6 flex items-center justify-between xl:mb-12">
				<h1 className="font-bold lg:text-lg">
					<Link href="/">Fendie</Link>
				</h1>
				{/* desktop */}
				<DesktopNavigation />
				<div className="hidden md:flex items-center gap-4 xl:text-xl">
					<FaShoppingBag className="cursor-pointer" onClick={handleCartClick} />
					<ThemeToggle />
				</div>
				{/* mobile */}
				<div className="flex items-center gap-4 md:hidden">
					<FaShoppingBag className="cursor-pointer" onClick={handleCartClick} />
					<ThemeToggle />
					<HamburgerMenu />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
