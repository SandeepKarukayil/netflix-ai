import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const handleButtonClick = () => {
		// validate the form data
		const message = checkValidData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			// signuplogic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					updateProfile(user, {
						displayName: name.current.value,
						photoURL:
							'https://avatars.githubusercontent.com/u/115607146?v=4',
					})
						.then(() => {
							// Profile updated!
							// ...
							const { uid, email, displayName, photoURL } =
								auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate('/browse');
						})
						.catch((error) => {
							// An error occurred
							// ...
							setErrorMessage(error.message);
						});
					console.log(user);

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
					// ..
				});
		} else {
			// sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate('/browse');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	};
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
				onSubmit={(e) => e.preventDefault()}
				action=""
				className="p-12 bg-black bg-opacity-80 absolute w-3/12 my-24 mx-auto left-0 right-0 text-white rounded-lg">
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-6 w-full  bg-gray-700 rounded-lg"
					/>
				)}
				<input
					type="text"
					ref={email}
					placeholder="Email Address"
					className="p-4 my-4 w-full   bg-gray-700  rounded-lg "
				/>
				<input
					ref={password}
					type="password"
					autoComplete="on"
					placeholder="Password"
					className="p-4 my-6 w-full  bg-gray-700 rounded-lg"
				/>
				<p className="text-red-500 font-bold text-lg py-2">
					{errorMessage}
				</p>
				<button
					className="p-4  my-4 bg-red-700 w-full rounded-lg"
					onClick={handleButtonClick}>
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
