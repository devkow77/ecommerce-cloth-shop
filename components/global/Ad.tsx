import React from 'react';

interface AdProps {
	children: React.ReactNode;
}

const Ad = ({ children }: AdProps) => {
	return <section className="text-sm bg-slate-600 text-white px-4 py-2 leading-6 text-center">{children}</section>;
};

export default Ad;
