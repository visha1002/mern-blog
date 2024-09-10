// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-86950.firebaseapp.com",
  projectId: "mern-blog-86950",
  storageBucket: "mern-blog-86950.appspot.com",
  messagingSenderId: "493348441107",
  appId: "1:493348441107:web:a8ee75f7f0adf3794643e6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
