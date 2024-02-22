'use client';

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		const initMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
				version: 'weekly',
			});

			const { Map } = await loader.importLibrary('maps');
			const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

			const position = {
				lat: 40.73061,
				lng: -73.935242,
			};

			const mapOptions: google.maps.MapOptions = {
				center: position,
				zoom: 10,
				mapId: 'MY_NEXTJS_MAPID',
			};

			const map = new Map(mapRef.current as unknown as HTMLDivElement, mapOptions);

			const marker = new Marker({
				map: map,
				position: position,
			});
		};

		initMap();
	}, []);

	return <div className="aspect-video w-full flex-1 rounded-2xl my-4" ref={mapRef} />;
};

export default GoogleMap;
