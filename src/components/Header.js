import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate('/');
			})
			.catch((error) => {
				// An error happened.
				navigate('/error');
			});
	};
	return (
		<div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-44"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>

			{user && (
				<div className="flex p-2 ">
					<img
						src={user?.photoURL}
						alt="userIcon"
						className="w-12 h-12"
					/>
					<button
						onClick={handleSignOut}
						className="font-bold text-white">
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
