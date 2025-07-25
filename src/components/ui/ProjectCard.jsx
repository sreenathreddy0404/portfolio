// src/components/sections/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
	return (
		<motion.div
			className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -10 }}
		>
			{/* Project Image */}
			<div className="relative h-48 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
				<div className="absolute top-4 right-4 z-20">
					<span className="px-3 py-1 text-xs font-medium text-white bg-gray-800 dark:bg-gray-700 rounded-full">
						{project.category}
					</span>
				</div>

				{/* Project Image */}
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
				/>
			</div>

			{/* Project Content */}
			<div className="p-6">
				<div className="mb-4">
					<h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
						{project.title}
					</h3>
					<div className="mt-1 flex gap-2">
						<span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
							{project.tags[0]}
						</span>
						<span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
							{project.tags[1]}
						</span>
					</div>
				</div>

				<p className="text-gray-600 dark:text-gray-400 mb-5 text-sm min-h-[60px]">
					{project.description}
				</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mb-6">
					{project.tags.map((tag, tagIndex) => (
						<motion.span
							key={tagIndex}
							className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
							whileHover={{ scale: 1.05 }}
						>
							{tag}
						</motion.span>
					))}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-3">
					<motion.a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group/github"
						whileHover={{ y: -3 }}
					>
						<FaGithub className="text-gray-700 dark:text-gray-300 group-hover/github:text-black dark:group-hover/github:text-white transition-colors" />
						<span className="text-sm font-medium">Code</span>
					</motion.a>

					<motion.a
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity group/demo"
						whileHover={{ y: -3 }}
					>
						<FaExternalLinkAlt className="group-hover/demo:animate-pulse" />
						<span className="text-sm font-medium">Live Demo</span>
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
