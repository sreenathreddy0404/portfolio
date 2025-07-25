import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [isDark, setIsDark] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	const toggleTheme = () => setIsDark(!isDark);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-md transition-colors">
			<div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
				<Link
					to="/"
					className="text-xl font-semibold text-gray-900 dark:text-gray-100"
				>
					Sreenath.dev
				</Link>

				<div className="hidden md:flex space-x-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							className={`text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition ${
								location.pathname === link.path
									? "font-semibold"
									: ""
							}`}
						>
							{link.name}
						</Link>
					))}
					<button
						onClick={toggleTheme}
						className="text-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
					>
						{isDark ? <FiSun /> : <FiMoon />}
					</button>
				</div>

				{/* Mobile Hamburger */}
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleTheme}
						className="mr-3 text-xl text-gray-700 dark:text-gray-300"
					>
						{isDark ? <FiSun /> : <FiMoon />}
					</button>
					<button
						onClick={toggleMenu}
						className="text-2xl text-gray-700 dark:text-gray-300"
					>
						{menuOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-neutral-900">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							onClick={() => setMenuOpen(false)}
							className={`block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition ${
								location.pathname === link.path
									? "font-semibold"
									: ""
							}`}
						>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
