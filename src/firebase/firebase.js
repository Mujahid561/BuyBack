// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { API_KEY,SENDER_ID,APP_ID } from "../key";
const firebaseConfig = {
  apiKey: API_KEY,
authDomain: "temp-ecomm.firebaseapp.com",
  projectId: "temp-ecomm",
storageBucket: "temp-ecomm.appspot.com",
  messagingSenderId: SENDER_ID,
  appId: APP_ID
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth()

export {app,auth,db}