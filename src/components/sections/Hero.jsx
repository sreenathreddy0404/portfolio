// src/components/sections/Hero.jsx
import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaCode,
	FaBrain,
	FaServer,
	FaPalette,
} from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 dark:bg-gray-900"
		>
			<div className="max-w-6xl w-full transition-all duration-300">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 shadow-2xl rounded-2xl">
					{/* Profile Photo */}
					<div className="flex justify-center order-first lg:order-none">
						{/* Interactive Avatar */}
						<motion.div
							className="flex justify-center"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
								<div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-gray-700 dark:to-gray-800 z-0" />

								<div className="relative z-10 w-full h-full flex items-center justify-center">
									<div className="bg-gray-100 rounded-full w-48 h-48 md:w-56 md:h-56 overflow-hidden">
										<img
											src={profile}
											alt="Sreenath Reddy"
											className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110"
										/>
									</div>
								</div>

								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-20" />

								{/* Floating elements */}
								<motion.div
									className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center z-30"
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<FaCode className="text-gray-700 dark:text-gray-300" />
								</motion.div>

								<motion.div
									className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center z-30"
									animate={{ y: [0, 10, 0] }}
									transition={{
										duration: 3.5,
										repeat: Infinity,
										ease: "easeInOut",
										delay: 0.5,
									}}
								>
									<FaBrain className="text-gray-700 dark:text-gray-300" />
								</motion.div>
							</div>
						</motion.div>
					</div>

					{/* Content */}
					<div className="flex flex-col justify-center">
						{/* Name and Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center lg:text-left">
								<span className="block text-gray-800 dark:text-gray-100">
									Hi, I'm
								</span>
								<span className="block mt-1 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
									Sreenath Reddy
								</span>
							</h1>

							<h2 className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium text-center lg:text-left">
								Full Stack Developer & AI Enthusiast
							</h2>
						</motion.div>

						{/* Description */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="mt-4"
						>
							<p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed text-center lg:text-left">
								A passionate CSE student and self-driven
								developer deeply enthusiastic about Artificial
								Intelligence 🤖 and Full Stack Web Development
								🌐.
							</p>

							<p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed text-center lg:text-left">
								My journey began with simple Python scripts and
								has evolved into building complex web
								applications and exploring machine learning
								models.
							</p>
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
						>
							<a
								href="https://www.linkedin.com/in/annareedy-sreenath/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							>
								<FaLinkedin className="text-sm animate-tilt" />
								<span className="text-sm font-medium">
									LinkedIn
								</span>
							</a>

							<a
								href="https://github.com/sreenathreddy0404"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							>
								<FaGithub className="text-sm animate-spin-slow" />
								<span className="text-sm font-medium">
									GitHub
								</span>
							</a>

							<a
								href="mailto:sreenathreddy0404@gmail.com"
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							>
								<FiMail className="text-sm animate-shake" />
								<span className="text-sm font-medium">
									Email
								</span>
							</a>

							<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer">
								<FiMapPin className="text-sm animate-bounce duration-400" />
								<span className="text-sm font-medium">
									India
								</span>
							</div>
						</motion.div>

						{/* Action Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
						>
							<a
								href="mailto:sreenathreddy0404@gmail.com"
								className="px-5 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition-opacity text-sm"
							>
								Hire Me
							</a>

							<a
								href="#contact"
								className="px-5 py-2.5 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-sm"
							>
								Contact Me
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
