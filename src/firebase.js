
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxDVRtuirwWwrBgirVcTMrX744hd_YIv8",
  authDomain: "let-s-chat-97217.firebaseapp.com",
  projectId: "let-s-chat-97217",
  storageBucket: "let-s-chat-97217.appspot.com",
  messagingSenderId: "998995965480",
  appId: "1:998995965480:web:0a277196e68f36b5eea71d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();