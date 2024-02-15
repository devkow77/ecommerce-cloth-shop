'use client';

import React, { Dispatch, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuMotion = {
	visible: {
		left: 0,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	hidden: {
		left: 100,
	},
};

const itemMotion = {
	visible: {
		x: 0,
		opacity: 1,
	},
	hidden: {
		x: -100,
		opacity: 0,
	},
};

const HamburgerMenu = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<>
			<div onClick={() => setToggle((prev) => !prev)} className="space-y-1.5 cursor-pointer z-40 lg:hidden">
				<motion.span animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }} className="block w-5 h-0.5 bg-slate-400 dark:bg-white"></motion.span>
				<motion.span animate={{ width: toggle ? 0 : 16 }} className="block w-4 h-0.5 bg-slate-400 dark:bg-white"></motion.span>
				<motion.span animate={{ rotateZ: toggle ? -45 : 0, y: toggle ? -8 : 0 }} className="block w-5 h-0.5 bg-slate-400 dark:bg-white"></motion.span>
			</div>
			{toggle && <MobileMenu toggle={toggle} setToggle={setToggle} />}
		</>
	);
};

const MobileMenu = ({ toggle, setToggle }: { toggle: boolean; setToggle: Dispatch<boolean> }) => {
	return (
		<motion.div variants={menuMotion} animate="visible" initial="hidden" className="fixed top-0 left-0 w-screen h-[100vh] bg-white dark:bg-neutral-900 flex items-center justify-center z-40">
			<ul className="space-y-6 font-semibold dark:text-white text-slate-400">
				<motion.li variants={itemMotion} className="">
					<Link href="/">Home</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/products">Products</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/men">Men</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/women">Women</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/sales">Sales</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/new">News</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/sizes">Sizes</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/news">News</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/faq">Faq</Link>
				</motion.li>
				<motion.li variants={itemMotion} className="hover:text-red-400">
					<Link href="/contact">Contact</Link>
				</motion.li>
			</ul>
		</motion.div>
	);
};

export default HamburgerMenu;
