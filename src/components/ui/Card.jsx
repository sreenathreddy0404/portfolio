const Card = ({ children, className = "" }) => {
	return (
		<div
			className={`
      bg-white dark:bg-gray-800 
      rounded-xl shadow-sm 
      border border-gray-100 dark:border-gray-700
      transition-all duration-300 
      hover:shadow-lg hover:-translate-y-1
      ${className}
    `}
		>
			{children}
		</div>
	);
};

export default Card;
