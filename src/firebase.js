// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWNTHl9paRhRfMmRPgQ2MWPCN3wv4yniE',
  authDomain: 'authapp-3a9a7.firebaseapp.com',
  projectId: 'authapp-3a9a7',
  storageBucket: 'authapp-3a9a7.appspot.com',
  messagingSenderId: '327519134753',
  appId: '1:327519134753:web:e845ae37fafd3f8d2e6f60',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
