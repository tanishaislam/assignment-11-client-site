// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwzg6GTbgmUKESokG_C0f5SMeJhubfoZM",
  authDomain: "assaignment-11-client.firebaseapp.com",
  projectId: "assaignment-11-client",
  storageBucket: "assaignment-11-client.appspot.com",
  messagingSenderId: "32432037559",
  appId: "1:32432037559:web:1b756e4b3bc030d4a47732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;