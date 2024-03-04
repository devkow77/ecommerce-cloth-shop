import React from 'react';
import { HoodieTable, ShirtTable, TrausersTable } from '@/components/sizes/index';
import { PiPants, PiHoodie, PiTShirt } from 'react-icons/pi';

const Sizes = () => {
	return (
		<main>
			<div className="max-w-7xl mx-auto p-6 pb-12">
				<h2 className="text-2xl font-black mb-4 md:text-3xl xl:text-4xl">
					PRODUCT <br /> <span className="text-emerald-400">TABLE</span> SIZES
				</h2>
				<section>
					<p className="text-sm leading-7 max-w-2xl mb-8 lg:text-base lg:leading-8">Discover the harmony of style and fit with our meticulously curated product table sizes, ensuring your confidence in every dimension of fashion.</p>
				</section>
				<section className="space-y-12">
					<div>
						<h3 className="flex items-center gap-2 font-bold mb-4 lg:text-lg">
							<span className="font-extrabold text-emerald-400">Hoodie</span> Size Charts <PiHoodie />
						</h3>
						<HoodieTable />
					</div>
					<div>
						<h3 className="flex items-center gap-2 font-bold mb-4 lg:text-lg">
							<span className="font-extrabold text-emerald-400">T-shirt</span> Size Charts <PiTShirt />
						</h3>
						<ShirtTable />
					</div>
					<div>
						<h3 className="flex items-center gap-2 font-bold mb-4 lg:text-lg">
							<span className="font-extrabold text-emerald-400">Trausers</span> Size Charts <PiPants />
						</h3>
						<TrausersTable />
					</div>
				</section>
			</div>
		</main>
	);
};

export default Sizes;
