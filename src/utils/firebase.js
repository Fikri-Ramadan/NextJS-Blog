// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'blog-app-5d071.firebaseapp.com',
  projectId: 'blog-app-5d071',
  storageBucket: 'blog-app-5d071.appspot.com',
  messagingSenderId: '733483752912',
  appId: '1:733483752912:web:fa55cfcf38abf008206dd5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
