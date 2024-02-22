import { Button } from '@/components/ui/button';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Success = () => {
	return (
		<main className="py-24 px-6 flex flex-col items-center">
			<ShoppingBagIcon size={60} />
			<h1 className="text-center my-4">
				Your order with id: 12281718 has been <span className="text-green-400">successfully</span> placed! <br />
				The time to realize order is <span className="font-semibold">3 days</span>
			</h1>
		</main>
	);
};

export default Success;
