// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBLffaNgo2JnzkQ0LxrnCuxY6bgES3Qj6A",
    authDomain: "postoffice-3852d.firebaseapp.com",
    projectId: "postoffice-3852d",
    storageBucket: "postoffice-3852d.appspot.com",
    messagingSenderId: "414260265839",
    appId: "1:414260265839:web:33dfd4ce1b950cb3d71e9a",
    measurementId: "G-TVYKT6B10W"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}

export const storage=firebase.storage();