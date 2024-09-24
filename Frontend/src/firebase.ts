// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "o-e2049.firebaseapp.com",
  projectId: "o-e2049",
  storageBucket: "o-e2049.appspot.com",
  messagingSenderId: "358059857666",
  appId: process.env.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
