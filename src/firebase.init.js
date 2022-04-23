// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB56yLrf7dlApEmurSw-ytuxNdMqhmdG6I",
  authDomain: "car-service-c7ca6.firebaseapp.com",
  projectId: "car-service-c7ca6",
  storageBucket: "car-service-c7ca6.appspot.com",
  messagingSenderId: "330249830349",
  appId: "1:330249830349:web:7dfbf86734e3a4471f8e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;