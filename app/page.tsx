import { Header, Newsletter, Policity, Premieres } from '@/components/landing/index';

export default function Home() {
	return (
		<main>
			<div className="max-w-7xl mx-auto px-6 pb-6 space-y-8 xl:space-y-12">
				<Header />
				<Premieres />
				<Policity />
				<Newsletter />
			</div>
		</main>
	);
}
