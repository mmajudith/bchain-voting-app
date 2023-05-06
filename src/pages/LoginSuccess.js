import SideBar from '../components/SideBar';
import Header from '../components/Header';

const LoginSuccess = ({ children }) => {
	return (
		<div className="max-w-screen-2xl h-full m-auto flex flex-row justify-between">
			<SideBar />
			<div className="w-full h-auto">
				<Header />
				{children}
			</div>
		</div>
	);
};

export default LoginSuccess;
