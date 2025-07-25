import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
	FaHome,
	FaUser,
	FaCode,
	FaProjectDiagram,
	FaEnvelope,
	FaGraduationCap,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	const navItems = [
		{ name: "Home", path: "#home", icon: <FaHome /> },
		{ name: "About", path: "#about", icon: <FaUser /> },
		{ name: "Skills", path: "#skills", icon: <FaCode /> },
		{ name: "Projects", path: "#projects", icon: <FaProjectDiagram /> },
		{ name: "Education", path: "/education", icon: <FaGraduationCap /> },
		{ name: "Contact", path: "#contact", icon: <FaEnvelope /> },
	];

	const handleLinkClick = () => {
		setToggle(false);
	};

	// Detect scroll position for navbar effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Determine if a nav item is active
	const isActive = (path) => {
		return (
			location.hash === path ||
			(location.pathname === "/" &&
				location.hash === "" &&
				path === "#home")
		);
	};

	return (
		<header
			className={`sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b transition-all duration-300 ${
				scrolled
					? "border-gray-200 dark:border-gray-800 shadow-md h-16"
					: "border-transparent h-20"
			}`}
		>
			<div className="max-w-6xl container mx-auto px-4 h-full flex justify-between items-center">
				<Link
					to="/"
					className="text-2xl font-bold tracking-wide dark:text-white flex items-center gap-2"
				>
					<motion.span
						className="bg-black dark:bg-white text-white dark:text-black w-9 h-9 text-sm p-3 rounded-full flex items-center justify-center"
						whileHover={{ rotate: 15 }}
					>
						SR
					</motion.span>
					<span className="hidden sm:block text-md">Sreenath Reddy</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-1">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.path}
							className={`relative px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 group ${
								isActive(item.path)
									? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
									: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							}`}
						>
							<span className="text-sm">{item.icon}</span>
							<span className="text-md">{item.name}</span>

							{/* Active indicator */}
							{isActive(item.path) && (
								<motion.div
									className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full"
									layoutId="activeIndicator"
								/>
							)}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<ThemeToggle />

					{/* Mobile Toggle Button */}
					<motion.button
						className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
						onClick={() => setToggle(!toggle)}
						whileTap={{ scale: 0.9 }}
					>
						{toggle ? (
							<FiX className="w-6 h-6" />
						) : (
							<FiMenu className="w-6 h-6" />
						)}
					</motion.button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{toggle && (
					<motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl"
					>
						<div className="container mx-auto px-4 py-4">
							<div className="grid grid-cols-2 gap-3">
								{navItems.map((item) => (
									<a
										key={item.name}
										href={item.path}
										onClick={handleLinkClick}
										className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
											isActive(item.path)
												? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
												: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
										}`}
									>
										<span className="text-md">
											{item.icon}
										</span>
										<span className="font-medium text-md">
											{item.name}
										</span>

										{isActive(item.path) && (
											<div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>
										)}
									</a>
								))}
							</div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
