'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShoppingBasket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

export const DesktopNavigation = () => {
	const pathname = usePathname();

	return (
		<NavigationMenu className="hidden md:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={`${pathname === '/products' && 'text-emerald-400 font-semibold'}`}>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild className="hover:dark:bg-neutral-700">
									<a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/products">
										<ShoppingBasket className="h-6 w-6" />
										<div className={`${pathname === '/products' && 'text-emerald-400'} mb-2 mt-4 text-lg font-medium`}>All Products</div>
										<p className="text-sm leading-tight text-muted-foreground">Indulge in a sartorial sanctuary where every stitch embodies sophistication and style, ensuring you step out in confidence and grace</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/products/gender/men" title="Men Products" className={`${pathname === '/products/gender/men' && 'dark:text-emerald-400 font-semibold'}`}>
								Elevate your wardrobe with refined essentials tailored for the modern gentleman, blending timeless sophistication with contemporary flair.
							</ListItem>
							<ListItem href="/products/gender/women" title="Women Products" className={`${pathname === '/products/gender/women' && 'dark:text-emerald-400 font-semibold'}`}>
								Embrace effortless elegance with our curated collection, designed to empower and inspire every womans unique style journey
							</ListItem>
							<ListItem href="/products/gender/unisex" title="Unisex Products" className={`${pathname === '/products/gender/unisex' && 'dark:text-emerald- font-semibold'}`}>
								Experience versatile fashion that transcends boundaries, offering timeless pieces for all identities to express their individuality with confidence.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/premieres" legacyBehavior passHref>
						<NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/premieres' && 'dark:text-emerald-400 font-semibold'}`}>Premieres</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/sizes" legacyBehavior passHref>
						<NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/sizes' && 'dark:text-emerald-400 font-semibold'}`}>Sizes</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/news" legacyBehavior passHref>
						<NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/news' && 'dark:text-emerald-400 font-semibold'}`}>News</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/faq" legacyBehavior passHref>
						<NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/faq' && 'dark:text-emerald-400 font-semibold'}`}>Faq</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/contact' && 'dark:text-emerald-400 font-semibold'}`}>Contact</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors dark:hover:bg-neutral-700 dark:hover:text-white focus:bg-accent focus:text-accent-foreground', className)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
