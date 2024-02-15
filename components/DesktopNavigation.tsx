'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShoppingBasket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export function DesktopNavigation() {
	return (
		<NavigationMenu className="hidden md:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild className="hover:dark:bg-neutral-700">
									<a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/products">
										<ShoppingBasket className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">All Products</div>
										<p className="text-sm leading-tight text-muted-foreground">Indulge in a sartorial sanctuary where every stitch embodies sophistication and style, ensuring you step out in confidence and grace</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/products/men" title="Men Products">
								Elevate your wardrobe with refined essentials tailored for the modern gentleman, blending timeless sophistication with contemporary flair.
							</ListItem>
							<ListItem href="/products/women" title="Women Products">
								Embrace effortless elegance with our curated collection, designed to empower and inspire every womans unique style journey
							</ListItem>
							<ListItem href="/products/unisex" title="Unisex Products">
								Experience versatile fashion that transcends boundaries, offering timeless pieces for all identities to express their individuality with confidence.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/sales" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Sales</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/news" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/faq" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Faq</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

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
