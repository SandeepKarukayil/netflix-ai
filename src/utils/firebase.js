// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC3TSxkEJuPW32DArHwg9eKGtMRrU1CLk8',
	authDomain: 'netflixai-3e55c.firebaseapp.com',
	projectId: 'netflixai-3e55c',
	storageBucket: 'netflixai-3e55c.appspot.com',
	messagingSenderId: '165579858389',
	appId: '1:165579858389:web:cc68dd7ec1cd497420dd5c',
	measurementId: 'G-YTEEZKG443',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
