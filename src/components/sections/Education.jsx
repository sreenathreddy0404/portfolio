// src/pages/EducationPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
	FaGraduationCap,
	FaUniversity,
	FaCalendarAlt,
	FaBook,
	FaMedal,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EducationPage = () => {
	const educationData = [
		{
			degree: "B.Tech in Computer Science & Engineering (AI)",
			institution: "Parul University, Vadodara, Gujarat",
			period: "Aug 2023 – May 2027",
			description:
				"Specializing in Artificial Intelligence. Learning Data Structures, Machine Learning, and Full Stack Development.",
			courses: [
				"Data Structures & Algorithms",
				"Machine Learning",
				"Web Technologies",
				"Database Systems",
			],
			achievements: [
				"Currently maintaining a CGPA of 9.0/10",
				"Participated in AI & ML Workshops",
			],
		},
		{
			degree: "Pre-University Course (PUC)",
			institution: "RGUKT RK Valley, Kadapa, Andhra Pradesh",
			period: "Jan 2022 – July 2023",
			description:
				"Focused on MPC and Computer Science with strong academic results and exposure to core engineering concepts.",
			courses: [
				"Mathematics",
				"Physics",
				"Chemistry",
				"Computer Science",
			],
			achievements: ["CGPA: 9.9/10", "Top 5% of the class"],
		},
	];

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">

			{/* Hero */}
			<div className="py-16 px-4 text-center">
				<motion.h1
					className="text-4xl md:text-5xl font-bold mb-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					My Academic Journey
				</motion.h1>
				<motion.p
					className="text-lg text-gray-600 dark:text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					A blend of strong fundamentals and practical learning.
				</motion.p>
			</div>

			{/* Education Cards (Stacked Vertically) */}
			<div className="max-w-3xl mx-auto px-4 space-y-12 pb-20">
				{educationData.map((edu, index) => (
					<motion.div
						key={index}
						className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow p-6"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.3 }}
					>
						<h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
							<FaGraduationCap className="text-blue-500" />
							{edu.degree}
						</h2>
						<div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
							<FaUniversity />
							<span>{edu.institution}</span>
							<FaCalendarAlt className="ml-4" />
							<span>{edu.period}</span>
						</div>
						<p className="mb-4 text-gray-700 dark:text-gray-300">
							{edu.description}
						</p>

						{/* Courses */}
						<h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
							<FaBook className="text-purple-500" />
							Key Courses
						</h3>
						<div className="flex flex-wrap gap-2 mb-5">
							{edu.courses.map((course, i) => (
								<span
									key={i}
									className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200"
								>
									{course}
								</span>
							))}
						</div>

						{/* Achievements */}
						<h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
							<FaMedal className="text-yellow-500" />
							Achievements
						</h3>
						<ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
							{edu.achievements.map((ach, i) => (
								<li key={i}>{ach}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>

			{/* Call to Action */}
			<div className="max-w-3xl mx-auto px-4 pb-20 text-center">
				<motion.div
					className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
						Want to know more?
					</h2>
					<p className="mb-4 text-gray-600 dark:text-gray-400">
						Check out my projects, experience, and certifications in
						the full portfolio.
					</p>
					<Link
						to="/"
						className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
					>
						Go to Portfolio
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default EducationPage;
