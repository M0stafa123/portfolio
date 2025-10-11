// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD5R4kDLzSKEoKIjZ6c-kOmtSvpHL7Jpag",
  authDomain: "portfolio-5ab32.firebaseapp.com",
  projectId: "portfolio-5ab32",
  storageBucket: "portfolio-5ab32.appspot.com",
  messagingSenderId: "510023456844",
  appId: "1:510023456844:web:a8fb16d1aa93acdcc23ce9",
  measurementId: "G-LZVTRVGF65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
