/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Providers from '@/utils/Providers';
import { Ad, Footer, Navbar, ShoppingCart } from '@/components/index';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fendie - Hoodie Eccomerce Shop',
	description: 'Fendie is small eccomerce hoodies shop in New York',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} dark:bg-neutral-900 dark:text-white bg-slate-100 text-slate-400`}>
				<Providers>
					<Ad>
						Unlock savings now! Enter code <span className="font-semibold">CODE10</span> at checkout before 01.12.2024 to enjoy an exclusive 10% discount on your purchase. Don't miss out on this limited-time offer!
					</Ad>
					<Navbar />
					<ShoppingCart />
					<Toaster />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
