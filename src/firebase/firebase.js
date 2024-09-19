// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBWNvO_R3a6yETOm6p03H21-yRGZwH0J1M",
authDomain: "temp-ecomm.firebaseapp.com",
  projectId: "temp-ecomm",
storageBucket: "temp-ecomm.appspot.com",
  messagingSenderId: "872767825711",
  appId: "1:872767825711:web:ceed28fb3d7d54e48723da"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth()

export {app,auth,db}