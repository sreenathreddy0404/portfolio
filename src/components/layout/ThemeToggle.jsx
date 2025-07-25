import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="relative w-14 h-8 rounded-full p-1 bg-gray-200 dark:bg-gray-700 transition-colors"
			aria-label={
				darkMode ? "Switch to light mode" : "Switch to dark mode"
			}
		>
			<div
				className={`absolute top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform ${
					darkMode ? "translate-x-6" : ""
				}`}
			>
				<div className="flex items-center justify-center h-full">
					{darkMode ? (
						<FiMoon className="text-gray-400" />
					) : (
						<FiSun className="text-yellow-500" />
					)}
				</div>
			</div>
		</button>
	);
};

export default ThemeToggle;
