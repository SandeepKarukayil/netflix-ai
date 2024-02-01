import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	return (
		<div>
			<Header />
			<div className="absolute ">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="netflix heading"
				/>
			</div>
			<form
				action=""
				className="p-12 bg-black bg-opacity-80 absolute w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg">
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 my-6 w-full  bg-gray-700 rounded-lg"
					/>
				)}
				<input
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full   bg-gray-700  rounded-lg "
				/>
				<input
					type="password"
					autoComplete="on"
					placeholder="Password"
					className="p-4 my-6 w-full  bg-gray-700 rounded-lg"
				/>
				<button className="p-4  my-4 bg-red-700 w-full rounded-lg">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p
					className="p-4 cursor-pointer"
					onClick={toggleSignInForm}>
					{isSignInForm
						? 'New to Netflix? Sign Up Now'
						: 'Already Registered? Sign In Now'}
				</p>
			</form>
		</div>
	);
};

export default Login;
