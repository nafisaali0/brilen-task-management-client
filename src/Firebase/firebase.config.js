import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtLwW12BuaH4F8IGq-tjRWyK6JXlhQcLk",
  authDomain: "brilen-task-management.firebaseapp.com",
  projectId: "brilen-task-management",
  storageBucket: "brilen-task-management.appspot.com",
  messagingSenderId: "982253314386",
  appId: "1:982253314386:web:bc7dba0259d06ddd8f5a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth