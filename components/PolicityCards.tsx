import React from 'react';
import { FaClock, FaGift, FaMapMarkedAlt, FaMoneyCheckAlt, FaShieldAlt, FaShoppingBag, FaTable, FaTruck } from 'react-icons/fa';

const policityCards = [
	{
		icon: <FaShoppingBag className="text-2xl mb-2" />,
		text: '14 days to return the product after receiving it',
	},
	{
		icon: <FaTruck className="text-2xl mb-2" />,
		text: 'guaranteed delivery within 3 business days',
	},
	{
		icon: <FaMapMarkedAlt className="text-2xl mb-2" />,
		text: 'Possibility to track the shipment of your parcel live',
	},
	{
		icon: <FaMoneyCheckAlt className="text-2xl mb-2" />,
		text: 'Secure payment methods',
	},
	{
		icon: <FaShieldAlt className="text-2xl mb-2" />,
		text: 'Personal data protection',
	},
	{
		icon: <FaGift className="text-2xl mb-2" />,
		text: 'Loyalty programs',
	},
	{
		icon: <FaTable className="text-2xl mb-2" />,
		text: 'Size charts',
	},
	{
		icon: <FaClock className="text-2xl mb-2" />,
		text: 'Reply from support within 24 hours',
	},
];

const PolicityCards = () => {
	return (
		<section className="grid grid-cols-2 gap-4 mt-4 mb-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
			{policityCards.length &&
				policityCards.map(({ icon, text }, key) => (
					<div key={key} className="aspect-square dark:bg-white dark:bg-opacity-5 bg-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center">
						{icon}
						<p className="text-center text-xs lg:text-base">{text}</p>
					</div>
				))}
		</section>
	);
};

export default PolicityCards;
