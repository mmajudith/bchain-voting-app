const Button = ({ text, type }) => {
	return (
		<div className="w-full h-[50px]">
			<button
				type={type}
				className="w-full h-full flex flex-col justify-center items-center text-white font-medium cursor-pointer bg-green hover:opacity-60 rounded-md"
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
