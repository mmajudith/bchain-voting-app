import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../reduxtoolkit/actionsCreator/userActions';
import Logo from '../images/logo.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as PollIcon } from '../images/polls.svg';
import { ReactComponent as AspirantIcon } from '../images/customers-inactive.svg';
import { ReactComponent as LogOutIcon } from '../images/logout.svg';

const SideBar = () => {
	const dispatch = useDispatch();

	return (
		<div className="w-[240px] h-[100vh] bg-white">
			<div className="w-full h-[65px] flex flex-col justify-center items-end">
				<img className="" src={Logo} alt="logo" />
			</div>
			<ul className="w-full h-fit mt-12 flex flex-col justify-center items-center gap-7">
				<li className="w-full h-[40px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<HomeIcon className="link-icon" />
							<p>Home</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[40px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/polls'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<PollIcon className="link-icon" />
							<p>Polls</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[40px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/aspirant'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<AspirantIcon className="link-icon-stroke" />
							<p>Aspirant Profiles</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[40px] text-gray font-medium text-sm m-auto">
					<div
						onClick={() => dispatch(logOut())}
						className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3 cursor-pointer"
					>
						<LogOutIcon />
						<p>LogOut</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
