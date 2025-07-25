// src/components/sections/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../ui/ProjectCard"; // We'll create this component

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filters = ["All", "Full Stack", "Web App", "JavaScript", "Real-time"];

	const projects = [
		{
			title: "CineBook Movie Platform",
			description:
				"Full-featured movie booking platform with seat selection, payment processing, and admin dashboard.",
			tags: ["React", "Node.js", "MongoDB", "Stripe", "Clerk"],
			category: "Full Stack",
			github: "#",
			demo: "#",
			image: "/images/cinebook.jpg", // Path to your image
		},
		{
			title: "Real-Time Chat App",
			description:
				"Instant messaging platform with real-time updates, user presence indicators, and media sharing.",
			tags: ["Socket.io", "React", "Node.js", "Express", "MongoDB"],
			category: "Real-time",
			github: "#",
			demo: "#",
			image: "/images/chat-app.jpg", // Path to your image
		},
		{
			title: "MusicFreak Artist Hub",
			description:
				"Concert booking platform with artist profiles, event management, and ticket purchasing.",
			tags: ["React", "Node.js", "MongoDB", "Stripe", "Mapbox"],
			category: "Full Stack",
			github: "#",
			demo: "#",
			image: "/images/musicfreak.jpg", // Path to your image
		},
		{
			title: "JavaScript Mini-Projects",
			description:
				"Collection of interactive JavaScript projects including games, utilities, and creative experiments.",
			tags: [
				"JavaScript",
				"HTML5",
				"CSS3",
				"Canvas API",
				"DOM Manipulation",
			],
			category: "JavaScript",
			github: "#",
			demo: "#",
			image: "/images/js-projects.jpg", // Path to your image
		},
		{
			title: "E-Commerce Dashboard",
			description:
				"Admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.",
			tags: ["React", "Redux", "Chart.js", "Firebase", "Tailwind CSS"],
			category: "Web App",
			github: "#",
			demo: "#",
			image: "/images/dashboard.jpg", // Path to your image
		},
		{
			title: "Weather Forecast App",
			description:
				"Location-based weather application with 7-day forecasts, severe weather alerts, and interactive maps.",
			tags: [
				"React",
				"OpenWeather API",
				"Geolocation",
				"Chart.js",
				"Tailwind CSS",
			],
			category: "Web App",
			github: "#",
			demo: "#",
			image: "/images/weather-app.jpg", // Path to your image
		},
	];

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section
			id="projects"
			className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
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
						Featured Projects
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
						Here are some projects I've built. Each represents a
						unique challenge and solution.
					</motion.p>
				</div>

				{/* Filter Buttons */}
				<motion.div
					className="flex flex-wrap justify-center gap-3 mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					{filters.map((filter, index) => (
						<motion.button
							key={index}
							onClick={() => setActiveFilter(filter)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								activeFilter === filter
									? "bg-black text-white dark:bg-white dark:text-black shadow-md"
									: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{filter}
						</motion.button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							index={index}
						/>
					))}
				</div>

				{/* JavaScript Mini-Projects Showcase */}
				<motion.div
					className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
						JavaScript Mini-Projects
					</h3>
					<p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-2xl mx-auto">
						A collection of small, interactive JavaScript projects
						showcasing DOM manipulation, API integration, and
						creative coding.
					</p>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{[
							{
								name: "Pomodoro Timer",
								tech: "JS, CSS",
								icon: "⏱️",
							},
							{
								name: "Memory Game",
								tech: "JS, Canvas",
								icon: "🎮",
							},
							{
								name: "Weather Widget",
								tech: "API, JS",
								icon: "⛅",
							},
							{
								name: "Drawing App",
								tech: "Canvas, JS",
								icon: "🎨",
							},
							{
								name: "Password Generator",
								tech: "JS, Security",
								icon: "🔑",
							},
							{
								name: "Unit Converter",
								tech: "JS, Math",
								icon: "📏",
							},
							{
								name: "Quiz App",
								tech: "JS, LocalStorage",
								icon: "❓",
							},
							{
								name: "Expense Tracker",
								tech: "JS, Charts",
								icon: "💰",
							},
						].map((project, index) => (
							<motion.div
								key={index}
								className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm group hover:shadow-md transition-shadow"
								whileHover={{ y: -5 }}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: index * 0.05,
								}}
							>
								<div className="flex items-center gap-3">
									<div className="text-2xl">
										{project.icon}
									</div>
									<div>
										<div className="text-sm font-medium text-gray-800 dark:text-gray-200">
											{project.name}
										</div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											{project.tech}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
