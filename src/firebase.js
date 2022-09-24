import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZdAEcXecCSMthKyNOCJ9JB4ETI_axoPc",
  authDomain: "getcollab-3624f.firebaseapp.com",
  projectId: "getcollab-3624f",
  storageBucket: "getcollab-3624f.appspot.com",
  messagingSenderId: "379103322848",
  appId: "1:379103322848:web:0240b2c1216c946bffa685",
  measurementId: "G-7ZYX7NR78L",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
