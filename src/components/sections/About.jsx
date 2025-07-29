// src/components/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
	FaCode,
	FaServer,
	FaBook,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import{
	SiLeetcode
}from "react-icons/si"

const About = () => (
	<section
		id="about"
		className="py-20 px-4 sm:px-6 dark:bg-gray-900 transition-colors duration-300"
	>
		<div className="max-w-6xl mx-auto">
			{/* Header */}
			<div className="text-center mb-16">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					About Me
				</motion.h2>
				<motion.div
					className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"
					initial={{ width: 0 }}
					whileInView={{ width: 80 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				/>
				<motion.p
					className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					Passionate CSE student specializing in AI and full-stack
					development
				</motion.p>
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Profile Card */}
				<motion.div
					className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-6">
						<div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32" />
					</div>

					<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
						Sreenath Reddy
					</h3>
					<p className="text-gray-600 dark:text-gray-400 mb-4">
						CSE Student @ Parul University
					</p>

					<div className="flex gap-4 mt-auto">
						<a
							href="https://github.com/sreenathreddy0404"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
							aria-label="GitHub"
						>
							<FaGithub className="text-xl" />
						</a>
						<a
							href="https://leetcode.com/annareddysreenathreddy"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
							aria-label="LeetCode"
						>
							<SiLeetcode className="text-xl" />
						</a>
						<a
							href="https://linkedin.com/in/annareedy-sreenath"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="text-xl" />
						</a>
					</div>
				</motion.div>

				{/* About Text */}
				<motion.div
					className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
						Building Digital Foundations Through Code
					</h3>

					<div className="space-y-4">
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							As a Computer Science student specializing in
							Artificial Intelligence at Parul University, I'm
							deeply passionate about transforming complex ideas
							into functional, efficient code. My journey focuses
							on mastering both the theoretical foundations and
							practical implementation of software development.
						</p>

						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							On{" "}
							<a
								href="https://github.com/sreenathreddy0404"
								target="_blank"
								rel="noopener"
								className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
							>
								GitHub
							</a>
							, I've built a portfolio of projects ranging from
							Java applications and Python web scrapers to UI
							experiments and MERN stack prototypes. Each
							repository represents my commitment to learning
							through hands-on development.
						</p>

						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							My problem-solving skills are continuously honed on{" "}
							<a
								href="https://leetcode.com/annareddysreenathreddy"
								target="_blank"
								rel="noopener"
								className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
							>
								LeetCode
							</a>
							, where I've solved <strong>160+ challenges</strong>{" "}
							- including 150+ in C++ and additional problems in C
							and MySQL. This rigorous practice has strengthened
							my algorithmic thinking and coding efficiency.
						</p>

						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							Currently, I'm focused on becoming a versatile
							developer capable of building scalable backend
							systems and intuitive frontend experiences. My goal
							is to create solutions that combine technical
							excellence with real-world impact.
						</p>
					</div>

					{/* Skills */}
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl">
							<div className="flex items-center gap-3 mb-2">
								<FaCode className="text-xl text-blue-500" />
								<span className="font-medium text-gray-800 dark:text-white">
									Programming
								</span>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								C++, Python, JavaScript
							</p>
						</div>

						<div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl">
							<div className="flex items-center gap-3 mb-2">
								<FaServer className="text-xl text-green-500" />
								<span className="font-medium text-gray-800 dark:text-white">
									Backend
								</span>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Node.js, Express, MongoDB
							</p>
						</div>

						<div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl">
							<div className="flex items-center gap-3 mb-2">
								<FaBook className="text-xl text-purple-500" />
								<span className="font-medium text-gray-800 dark:text-white">
									Algorithms
								</span>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Data Structures, Problem Solving
							</p>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Stats */}
			<motion.div
				className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				{[
					{
						title: "LeetCode Solved",
						value: "160+",
						description: "Problems across languages",
						icon: (
							<SiLeetcode className="text-3xl text-orange-500" />
						),
					},
					{
						title: "GitHub Projects",
						value: "4‑6",
						description: "Learning repositories",
						icon: (
							<FaGithub className="text-3xl text-gray-800 dark:text-gray-300" />
						),
					},
					{
						title: "Languages Known",
						value: "C++, Python, JS",
						description: "Building robust solutions",
						icon: <FaCode className="text-3xl text-blue-500" />,
					},
				].map((item, i) => (
					<motion.div
						key={i}
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-4"
						whileHover={{ y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
							{item.icon}
						</div>
						<div>
							<div className="text-2xl font-bold text-gray-800 dark:text-white">
								{item.value}
							</div>
							<div className="text-lg font-medium text-gray-700 dark:text-gray-300">
								{item.title}
							</div>
							<p className="text-gray-500 dark:text-gray-400">
								{item.description}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
);
export default About;
