'use client';

import React, { useState, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { CartProvider } from 'use-shopping-cart';
import { store, AppStore } from '@/lib/store';
import { Provider } from 'react-redux';

const Providers = ({ children, ...props }: ThemeProviderProps) => {
	const [queryClient] = useState(() => new QueryClient());
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = store();
	}

	return (
		<QueryClientProvider client={queryClient}>
			<NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<CartProvider
					mode="payment"
					cartMode="client-only"
					stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}
					successUrl="http://localhost:3000/success"
					cancelUrl="http://localhost:3000/cancel"
					billingAddressCollection={true}
					shouldPersist={true}
					language="en-US"
					currency="USD"
				>
					<Provider store={storeRef.current}>{children}</Provider>
				</CartProvider>
			</NextThemesProvider>
		</QueryClientProvider>
	);
};

export default Providers;
