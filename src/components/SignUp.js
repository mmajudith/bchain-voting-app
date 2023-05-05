import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from '../reduxtoolkit/actionsCreator/userActions';
import InputText from './InputText';
import PassWord from './PasswordInput';
import Button from './Button';

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [passWord, setPassWord] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(logIn('judith'));
		toast.success('Successfully sign up.');
		navigate('/');
	};

	return (
		<div className="w-[560px] h-full bg-white rounded flex flex-col justify-center items-center">
			<p className="w-10/12 mx-auto mb-1 text-black text-3xl font-bold">
				Sign Up to Vote
			</p>
			<p className="w-10/12 mx-auto mb-10 text-gray text-sm font-medium">
				Please fill the information below
			</p>
			<form
				onSubmit={handleSubmit}
				className="w-10/12 h-auto mx-auto flex flex-col justify-center gap-9"
			>
				<InputText
					type={'text'}
					placeholder={'Enter Your Username'}
					value={userName}
					onChangeHandler={(e) => setUserName(e.target.value)}
				/>
				<InputText
					type={'number'}
					placeholder={'Enter Your VIN'}
					value={cardNumber}
					onChangeHandler={(e) => setCardNumber(e.target.value)}
				/>
				<PassWord
					value={passWord}
					onChangeHandler={(e) => setPassWord(e.target.value)}
				/>
				<Button text={'Sign Up'} type={'submit'} />
			</form>
			<p className="w-10/12 mx-auto mt-4 font-medium text-sm text-center">
				Already have an account?{' '}
				<Link to="/user" className="text-green cursor-pointer">
					Sign In
				</Link>
			</p>
		</div>
	);
};

export default SignUp;
