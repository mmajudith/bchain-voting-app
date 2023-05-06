import LocationIcon from '../images/location.png';
import UserIcon from '../images/user.svg';
import ConnectButton from './ConnectButton';

const Header = () => {
	return (
		<div className="w-full h-[65px] mb-[56px] px-7 bg-white flex flex-row justify-between items-center">
			<div className="flex flex-row justify-center items-center gap-3">
				<img src={LocationIcon} alt="location icon" />
				<p>Ikeja LGA, Lagos State</p>
			</div>
			<div className="flex flex-row justify-center items-center gap-6">
				<ConnectButton />
				<div className="flex flex-row justify-between items-center gap-2">
					<img
						className="w-[40px] h-[40px]"
						src={UserIcon}
						alt="user profile icon"
					/>
					<p className="font-semibold text-sm">Adeniran Tobiloba</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
