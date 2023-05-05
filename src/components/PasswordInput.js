import { useState } from 'react';
import { ReactComponent as EyeInVisible } from '../images/eye-invisible.svg';
import { ReactComponent as EyeVisible } from '../images/visible-eye.svg';

const PassWord = ({ value, onChangeHandler }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleShowHidePass = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div
			className="w-full h-[50px] text-gray outline-none border-gray border-solid border rounded
						flex flex-row justify-between items-center px-3"
		>
			<input
				className="w-[90%] h-full border-none outline-none text-gray"
				type={`${!isVisible ? 'password' : 'text'}`}
				placeholder="Password"
				value={value}
				onChange={onChangeHandler}
			/>
			<p className="w-fit h-fit cursor-pointer" onClick={handleShowHidePass}>
				{!isVisible ? <EyeInVisible /> : <EyeVisible />}
			</p>
		</div>
	);
};

export default PassWord;
