// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GoogleAuthProviderG} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYAvc7ibgy6HvTqZxkpsCfGDp8ZsN-of0",
    authDomain: "netfluxmovie-1c077.firebaseapp.com",
    projectId: "netfluxmovie-1c077",
    storageBucket: "netfluxmovie-1c077.appspot.com",
    messagingSenderId: "730796893261",
    appId: "1:730796893261:web:b581dbdd7cd22a61ffe804",
    measurementId: "G-953TMZST23"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const GoogleAuth= new GoogleAuthProvider();