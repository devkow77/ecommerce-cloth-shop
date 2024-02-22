'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import axios from 'axios';
import { useShoppingCart } from 'use-shopping-cart';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';
import { setQuantity, setSize } from '@/lib/slice';

interface Product {
	product: {
		id: string;
		title: string;
		stripeApi: string;
		price: string;
		images: {
			url: string;
		}[];
		description: string;
		slug: string;
		bio: string;
	};
}

const Checkout = ({ product }: Product) => {
	const { addItem, handleCartClick, cartDetails, incrementItem } = useShoppingCart();
	const { size, quantity } = useSelector((state: RootState) => state.product);
	const dispatch = useDispatch();
	const { toast } = useToast();
	const buyNow = async () => {
		const { data } = await axios.post(
			'/api/payment',
			{
				priceId: product.stripeApi,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		window.location.assign(data);
	};

	const productInfo = {
		name: product.title,
		description: product.description,
		id: `${product.id}-${size}`,
		price: Number(product.price) * quantity,
		currency: 'PLN',
		image: product.images[0].url,
		slug: product.slug,
		bio: product.bio,
		size,
		amountOfProduct: quantity,
	};

	const addToCart = () => {
		if (!size.length || quantity < 1) {
			toast({
				title: 'Uh oh! Something went wrong.',
				description: 'You need to select a size or quantity.',
				variant: 'destructive',
			});
			return;
		}

		const existingCartProduct = Object.values(cartDetails ?? {}).find((item) => item.id === productInfo.id && item.size === size);
		if (existingCartProduct) {
			const updateQuantity = existingCartProduct.amountOfProduct + quantity;
			incrementItem(existingCartProduct.id, updateQuantity);
		} else {
			addItem(productInfo);
		}
		handleCartClick();
		dispatch(setSize(''));
		dispatch(setQuantity(1));
	};

	return (
		<section className="flex items-center gap-2 lg:gap-3">
			<Button variant={'buy'} onClick={buyNow}>
				Buy now
			</Button>
			<Button variant={'addToCart'} onClick={addToCart}>
				Add to cart 🛒
			</Button>
		</section>
	);
};

export default Checkout;
