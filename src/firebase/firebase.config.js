// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7ndpM9OR10NT5fLkyVXzYlzLUCtgPYU",
  authDomain: "news-portal-e48e7.firebaseapp.com",
  projectId: "news-portal-e48e7",
  storageBucket: "news-portal-e48e7.appspot.com",
  messagingSenderId: "891251334001",
  appId: "1:891251334001:web:bf065400f74321d510f4d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;