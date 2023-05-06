import ConnectButton from '../components/ConnectButton';

const Home = () => {
	return (
		<div className="w-full h-fit px-7 mb-[56px]">
			<h1 className="font-bold text-xl">Welcome, Adeniran</h1>

			<div className="w-full h-fit mt-5 p-5 bg-white rounded flex flex-col justify-start gap-4">
				<h2 className="font-bold text-lg">Connect your wallet</h2>
				<p className="text-sm text-gray font-medium">
					You need to connect your metamask wallet before you can vote for an
					aspirant in any poll on BlockVote
				</p>
				<ConnectButton />
			</div>
		</div>
	);
};

export default Home;
