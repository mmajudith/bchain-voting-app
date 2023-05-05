const InputText = ({ type, placeholder, value, onChangeHandler }) => {
	return (
		<input
			className="w-full h-[50px] text-gray pl-3 outline-none border-gray border-solid border rounded"
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};

export default InputText;
