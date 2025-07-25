// src/components/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Correctly grouped react-icons imports ✅
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaDatabase,
	FaBrain,
  FaAws
} from "react-icons/fa";

import {
	SiJavascript,
	SiTensorflow,
	SiMongodb,
	SiPostgresql,
	SiDjango,
	SiFlask,
	SiExpress,
	SiGit,
	SiDocker,
	SiGooglecloud,
	SiFirebase,
} from "react-icons/si";

const Skills = () => {
	const skillCategories = [
		{
			title: "Frontend",
			icon: <FaReact className="w-8 h-8 text-blue-500" />,
			skills: [
				{
					name: "React",
					level: 90,
					icon: <FaReact className="w-5 h-5" />,
				},
				{
					name: "JavaScript",
					level: 85,
					icon: <SiJavascript className="w-5 h-5 text-yellow-400" />,
				},
				{
					name: "HTML/CSS",
					level: 95,
					icon: (
						<div className="text-orange-500 font-bold">{"</>"}</div>
					),
				},
			],
		},
		{
			title: "Backend",
			icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
			skills: [
				{
					name: "Node.js",
					level: 85,
					icon: <FaNodeJs className="w-5 h-5 text-green-600" />,
				},
				{
					name: "Express",
					level: 80,
					icon: (
						<SiExpress className="w-5 h-5 text-gray-800 dark:text-gray-200" />
					),
				},
				{
					name: "Python",
					level: 90,
					icon: <FaPython className="w-5 h-5 text-blue-600" />,
				},
			],
		},
		{
			title: "AI/ML",
			icon: <FaBrain className="w-8 h-8 text-purple-500" />,
			skills: [
				{
					name: "TensorFlow",
					level: 75,
					icon: <SiTensorflow className="w-5 h-5 text-orange-500" />,
				},
				{
					name: "PyTorch",
					level: 70,
					icon: <div className="text-red-500 font-bold">PT</div>,
				},
				{
					name: "NLP",
					level: 65,
					icon: <div className="text-blue-400 font-bold">AI</div>,
				},
			],
		},
		{
			title: "Databases",
			icon: <FaDatabase className="w-8 h-8 text-yellow-500" />,
			skills: [
				{
					name: "MongoDB",
					level: 85,
					icon: <SiMongodb className="w-5 h-5 text-green-500" />,
				},
				{
					name: "PostgreSQL",
					level: 80,
					icon: <SiPostgresql className="w-5 h-5 text-blue-400" />,
				},
				{
					name: "Firebase",
					level: 75,
					icon: <SiFirebase className="w-5 h-5 text-yellow-500" />,
				},
			],
		},
		{
			title: "Frameworks",
			icon: <SiDjango className="w-8 h-8 text-green-700" />,
			skills: [
				{
					name: "Django",
					level: 85,
					icon: <SiDjango className="w-5 h-5 text-green-700" />,
				},
				{
					name: "Flask",
					level: 80,
					icon: (
						<SiFlask className="w-5 h-5 text-gray-800 dark:text-gray-200" />
					),
				},
				{
					name: "Next.js",
					level: 75,
					icon: (
						<div className="text-black dark:text-white font-bold">
							N
						</div>
					),
				},
			],
		},
		{
			title: "DevOps",
			icon: <SiDocker className="w-8 h-8 text-blue-400" />,
			skills: [
				{
					name: "Docker",
					level: 75,
					icon: <SiDocker className="w-5 h-5 text-blue-400" />,
				},
				{
					name: "AWS",
					level: 70,
					icon: <FaAws className="w-5 h-5 text-orange-500" />,
				},
				{
					name: "GCP",
					level: 65,
					icon: <SiGooglecloud className="w-5 h-5 text-blue-500" />,
				},
			],
		},
	];

	return (
		<section
			id="skills"
			className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
		>
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						My Skills
					</motion.h2>
					<motion.div
						className="w-20 h-1 bg-gray-800 dark:bg-white mx-auto"
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
						I've worked with a range of technologies in the web
						development world. Here's a showcase of my technical
						skills.
					</motion.p>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{/* Category Header */}
							<div className="flex items-center gap-4 mb-6">
								<motion.div
									className="p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
									whileHover={{ rotate: 10 }}
									transition={{ duration: 0.3 }}
								>
									{category.icon}
								</motion.div>
								<h3 className="text-xl font-bold text-gray-800 dark:text-white">
									{category.title}
								</h3>
							</div>

							{/* Skills List */}
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skillIndex}
										className="flex items-center gap-3 group"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
											{skill.icon}
										</div>
										<div className="flex-grow">
											<div className="flex justify-between mb-1">
												<span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
													{skill.name}
												</span>
												<span className="text-xs text-gray-500 dark:text-gray-400">
													{skill.level}%
												</span>
											</div>
											<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
												<motion.div
													className="bg-gray-800 dark:bg-gray-300 h-2 rounded-full group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors"
													initial={{ width: 0 }}
													whileInView={{
														width: `${skill.level}%`,
													}}
													viewport={{ once: true }}
													transition={{
														duration: 1,
														delay:
															0.2 +
															index * 0.1 +
															skillIndex * 0.05,
													}}
												/>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div
					className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
						More Technologies I Work With
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							{
								name: "TypeScript",
								icon: (
									<div className="text-blue-600 font-bold">
										TS
									</div>
								),
							},
							{
								name: "Redux",
								icon: (
									<div className="text-purple-500 font-bold">
										RX
									</div>
								),
							},
							{
								name: "GraphQL",
								icon: (
									<div className="text-pink-500 font-bold">
										GQL
									</div>
								),
							},
							{
								name: "Tailwind CSS",
								icon: (
									<div className="text-teal-500 font-bold">
										TW
									</div>
								),
							},
							{
								name: "Jest",
								icon: (
									<div className="text-red-500 font-bold">
										J
									</div>
								),
							},
							{
								name: "CI/CD",
								icon: (
									<div className="text-blue-400 font-bold">
										CD
									</div>
								),
							},
							{
								name: "Kubernetes",
								icon: (
									<div className="text-blue-500 font-bold">
										K8
									</div>
								),
							},
							{
								name: "Scikit-Learn",
								icon: (
									<div className="text-orange-500 font-bold">
										SK
									</div>
								),
							},
						].map((tech, index) => (
							<motion.div
								key={index}
								className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm w-24 h-24 group"
								whileHover={{ y: -5 }}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: index * 0.05,
								}}
							>
								<div className="text-2xl mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
									{tech.icon}
								</div>
								<span className="text-xs font-medium text-gray-700 dark:text-gray-300">
									{tech.name}
								</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
