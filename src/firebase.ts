// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSmC4UGw4If0czoVYGFprPpSqrmVtsMJE",
  authDomain: "work-7e887.firebaseapp.com",
  projectId: "work-7e887",
  storageBucket: "work-7e887.appspot.com",
  messagingSenderId: "458682928054",
  appId: "1:458682928054:web:f46b6900f467c875464f17",
  measurementId: "G-QS6Y12EZSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
