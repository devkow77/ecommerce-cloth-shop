export interface Product {
	id: string;
	slug: string;
	title: string;
	stripeApi: string;
	price: string;
	images: {
		url: string;
	}[];
	description: string;
	createdAt: string;
	gender: {
		name: string;
	};
	category: {
		name: string;
	};
	bio: string;
}
export interface Filter {
	gender: string;
	product: string;
	sort: string;
}

// News Page

export interface NewsInterface {
	id: number;
	slug: string;
	image: {
		url: string;
	};
	title: string;
	content: {
		html: string;
	};
	date: string;
}
