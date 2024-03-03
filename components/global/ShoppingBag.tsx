import React from 'react';
import { ShoppingBagIcon } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

interface ShoppingBagProps {
	openCart: () => void;
}

const ShoppingBag = ({ openCart }: ShoppingBagProps) => {
	const { cartCount } = useShoppingCart();
	return (
		<div className="relative">
			<ShoppingBagIcon className="cursor-pointer" onClick={openCart} />
			<div className={`${!cartCount ? 'hidden' : 'absolute'} -bottom-3 -right-2 py-1 px-2 rounded-full bg-red-500 text-xs font-semibold`}>{cartCount}</div>
		</div>
	);
};

export default ShoppingBag;
