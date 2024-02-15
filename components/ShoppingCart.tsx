'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';
import { ShoppingCartIcon, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ShoppingCart = () => {
	const { handleCartClick, shouldDisplayCart, cartCount, cartDetails, clearCart, totalPrice, removeItem } = useShoppingCart();

	return (
		<Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent className="sm:max-w-lg w-[90vw] z-50 dark:bg-neutral-900">
				<SheetHeader>
					<SheetTitle className="font-extrabold">Shopping Cart</SheetTitle>
				</SheetHeader>
				<div className="relative h-full flex flex-col justify-between py-6">
					{cartCount === 0 && (
						<div>
							<section className="relative" />
							<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<div className="min-w-[260px] flex flex-col items-center">
									<ShoppingCartIcon size={80} />
									<h1 className="font-extrabold text-center mt-6 mb-2">Your cart is empty! 😢</h1>
									<p className="text-sm text-slate-300 text-center">Looks like you have not added anything to your cart yet</p>
								</div>
							</section>
						</div>
					)}
					{Number(cartCount) > 0 && (
						<section className="h-full my-8 overflow-y-auto py-4">
							<ul className="space-y-6">
								{Object.values(cartDetails ?? {}).map((item, index) => (
									<li key={index}>
										<div className="relative max-w-[380px] flex items-center gap-4">
											<Link href={`/products/${item.slug}`} className="block aspect-square w-[80px] h-[80px]">
												<Image src={item.image as string} alt={item.name} width={80} height={80} className="aspect-square rounded-2xl object-cover object-center" />
											</Link>
											<div className="text-sm pr-6">
												<h2 className="font-semibold">
													{item.name} ({item.size})
												</h2>
												<p className="text-slate-300 mt-1 mb-2">{`${item.bio.substring(0, 96)}...`}</p>
												<h2 className="font-semibold">
													{item.price.toPrecision(5)} {item.currency} | <span className="text-red-400">Quantity: {item.quantity}</span>
												</h2>
											</div>
											<Trash size={20} className="absolute top-1/3 right-0 cursor-pointer hover:text-red-400 duration-200" onClick={() => removeItem(item.id)} />
										</div>
									</li>
								))}
							</ul>
						</section>
					)}
					<section>
						<h2>
							Quantity of products: <span className="font-semibold">{cartCount}</span> <br />
							Total price: <span className="font-semibold">{Number(totalPrice).toPrecision(5)} PLN</span>
						</h2>
						<div className="flex items-center gap-4 mt-6">
							<Button variant={'buy'} disabled={cartCount === 0}>
								Checkout 🫰
							</Button>
							<Button variant={'deleteProduct'} onClick={clearCart} disabled={cartCount === 0}>
								Clear products
							</Button>
						</div>
					</section>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default ShoppingCart;
