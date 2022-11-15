// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-X0joIWotEPagTvxszZnADmj2rRVFPVU",
  authDomain: "react-project-b7296.firebaseapp.com",
  projectId: "react-project-b7296",
  storageBucket: "react-project-b7296.appspot.com",
  messagingSenderId: "1057597604206",
  appId: "1:1057597604206:web:994a99ff0208b5288c817f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
