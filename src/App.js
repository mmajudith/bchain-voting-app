import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import User from './pages/User';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './pages/Home';

const App = () => {
	const { currentUser } = useSelector((state) => state.authSlice);

	const RequireAuth = ({ children }) => {
		return currentUser ? children : <Navigate to="/user" />;
	};

	return (
		<div className="w-full h-full m-auto">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route path="/">
					<Route path="user" element={<User />}>
						<Route index element={<SignIn />} />
						<Route path="signUp" element={<SignUp />} />
					</Route>
					<Route
						index
						element={
							<RequireAuth>
								<Home />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
