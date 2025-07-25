// src/components/sections/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaEnvelope,
	FaMapMarkerAlt,
	FaPhone,
} from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			alert("Message sent successfully! I'll get back to you soon.");
			setFormData({ name: "", email: "", subject: "", message: "" });
		}, 1500);
	};

	return (
		<section
			id="contact"
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
						Get In Touch
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
						Have a project in mind or want to discuss opportunities?
						Feel free to reach out!
					</motion.p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information Card */}
					<motion.div
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
							Contact Information
						</h3>

						<div className="space-y-6">
							{/* Contact Item 1 */}
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
									<FaEnvelope className="text-blue-500 text-xl" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
										Email
									</h4>
									<a
										href="mailto:sreenathreddy0404@gmail.com"
										className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
									>
										sreenathreddy0404@gmail.com
									</a>
								</div>
							</div>

							{/* Contact Item 2 */}
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
									<FaPhone className="text-green-500 text-xl" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
										Phone
									</h4>
									<a
										href="tel:+919494949494"
										className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
									>
										+91 9494949494
									</a>
								</div>
							</div>

							{/* Contact Item 3 */}
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
									<FaMapMarkerAlt className="text-red-500 text-xl" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
										Location
									</h4>
									<p className="text-gray-600 dark:text-gray-400">
										Andhra Pradesh, India
									</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="mt-10">
							<h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
								Connect with me
							</h4>
							<div className="flex gap-4">
								{[
									{
										icon: (
											<FaLinkedin className="text-xl" />
										),
										href: "https://linkedin.com/in/annareedy-sreenath",
										label: "LinkedIn",
										color: "bg-blue-600",
									},
									{
										icon: <FaGithub className="text-xl" />,
										href: "https://github.com/sreenathreddy0404",
										label: "GitHub",
										color: "bg-gray-800 dark:bg-gray-700",
									},
									{
										icon: <FaTwitter className="text-xl" />,
										href: "#",
										label: "Twitter",
										color: "bg-sky-500",
									},
									{
										icon: <FiMail className="text-xl" />,
										href: "mailto:sreenathreddy0404@gmail.com",
										label: "Email",
										color: "bg-red-500",
									},
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${social.color} hover:opacity-90 transition-opacity`}
										whileHover={{ y: -5 }}
										aria-label={social.label}
									>
										{social.icon}
									</motion.a>
								))}
							</div>
						</div>

						{/* Availability */}
						<div className="mt-10 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
							<h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
								<span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
								Currently available for opportunities
							</h4>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								I'm actively looking for new projects and
								collaborations. Feel free to reach out if you
								want to work together!
							</p>
						</div>
					</motion.div>

					{/* Contact Form Card */}
					<motion.div
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
							Send Me a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name Field */}
							<div className="relative">
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg peer focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 transition-colors"
								/>
								<label
									htmlFor="name"
									className={`absolute left-4 transition-all duration-300 ${
										formData.name
											? "text-xs -top-3 bg-white dark:bg-gray-800 px-1 text-gray-600 dark:text-gray-400"
											: "top-3.5 text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
									}`}
								>
									Your Name
								</label>
							</div>

							{/* Email Field */}
							<div className="relative">
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg peer focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 transition-colors"
								/>
								<label
									htmlFor="email"
									className={`absolute left-4 transition-all duration-300 ${
										formData.email
											? "text-xs -top-3 bg-white dark:bg-gray-800 px-1 text-gray-600 dark:text-gray-400"
											: "top-3.5 text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
									}`}
								>
									Your Email
								</label>
							</div>

							{/* Subject Field */}
							<div className="relative">
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg peer focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 transition-colors"
								/>
								<label
									htmlFor="subject"
									className={`absolute left-4 transition-all duration-300 ${
										formData.subject
											? "text-xs -top-3 bg-white dark:bg-gray-800 px-1 text-gray-600 dark:text-gray-400"
											: "top-3.5 text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
									}`}
								>
									Subject
								</label>
							</div>

							{/* Message Field */}
							<div className="relative">
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg peer focus:outline-none focus:border-gray-800 dark:focus:border-gray-400 transition-colors resize-none"
								/>
								<label
									htmlFor="message"
									className={`absolute left-4 transition-all duration-300 ${
										formData.message
											? "text-xs -top-3 bg-white dark:bg-gray-800 px-1 text-gray-600 dark:text-gray-400"
											: "top-3.5 text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
									}`}
								>
									Your Message
								</label>
							</div>

							{/* Submit Button */}
							<motion.button
								type="submit"
								disabled={isSubmitting}
								className={`w-full py-3.5 px-6 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium flex items-center justify-center gap-2 ${
									isSubmitting
										? "opacity-70 cursor-not-allowed"
										: "hover:opacity-90"
								} transition-opacity`}
								whileHover={
									!isSubmitting ? { scale: 1.02 } : {}
								}
								whileTap={!isSubmitting ? { scale: 0.98 } : {}}
							>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</>
								) : (
									<>
										<FiSend className="text-lg" />
										Send Message
									</>
								)}
							</motion.button>
						</form>

						{/* Contact Status */}
						<div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
							<h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
								Response Time
							</h4>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								I typically respond to messages within 24 hours.
								If you have an urgent inquiry, feel free to call
								me directly at{" "}
								<span className="font-medium">
									+91 9494949494
								</span>
								.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
