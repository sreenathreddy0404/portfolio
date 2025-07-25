// src/components/layout/Footer.jsx
import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaHeart,
	FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
			<div className="max-w-6xl container mx-auto px-4 sm:px-6 pt-20 pb-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand info */}
					<div className="md:col-span-1">
						<h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
							Sreenath Reddy
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-4">
							Full Stack Developer & AI Enthusiast creating
							innovative digital experiences.
						</p>
						<div className="flex gap-4 mt-6">
							{[
								{
									icon: <FaGithub />,
									href: "https://github.com/sreenathreddy0404",
									label: "GitHub",
								},
								{
									icon: <FaLinkedin />,
									href: "https://linkedin.com/in/annareedy-sreenath",
									label: "LinkedIn",
								},
								{
									icon: <FaTwitter />,
									href: "#",
									label: "Twitter",
								},
								{
									icon: <FaInstagram />,
									href: "#",
									label: "Instagram",
								},
							].map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow hover:text-black dark:hover:text-white"
									whileHover={{ y: -5 }}
									aria-label={social.label}
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
							Navigation
						</h4>
						<ul className="space-y-2">
							{["Home", "Skills", "Projects", "Contact"].map(
								(item, index) => (
									<li key={index}>
										<a
											href={`#${item.toLowerCase()}`}
											className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
										>
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
							Contact
						</h4>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<div className="mt-1">
									<svg
										className="w-5 h-5 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path>
									</svg>
								</div>
								<span className="text-gray-600 dark:text-gray-400">
									sreenathreddy0404@gmail.com
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="mt-1">
									<svg
										className="w-5 h-5 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
								</div>
								<span className="text-gray-600 dark:text-gray-400">
									+91 9494949494
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="mt-1">
									<svg
										className="w-5 h-5 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</div>
								<span className="text-gray-600 dark:text-gray-400">
									Andhra Pradesh, India
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} Sreenath Reddy. All
						rights reserved.
					</div>

					<div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
						Made with <FaHeart className="text-red-500 mx-1" /> in
						India
					</div>
				</div>
			</div>

			{/* Back to top button */}
			<motion.button
				onClick={scrollToTop}
				className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black dark:bg-white shadow-lg flex items-center justify-center text-white dark:text-black z-50"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				aria-label="Back to top"
			>
				<FaArrowUp />
			</motion.button>
		</footer>
	);
};

export default Footer;
