// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTc7YT5HXCvTxkPDdlzORRG7_DpgwHjXM",
  authDomain: "yadav-87e6d.firebaseapp.com",
  projectId: "yadav-87e6d",
  storageBucket: "yadav-87e6d.appspot.com",
  messagingSenderId: "689915191412",
  appId: "1:689915191412:web:52dc7cfd9f23aa5e4b3121",
  measurementId: "G-B2T43G6GJ2"
};


const app = initializeApp(firebaseConfig);
const auth =  getAuth();
export {app, auth};