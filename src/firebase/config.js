// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtGOaJVlHUrs2oBGB3f1OUy-k6yOQfxIc",
  authDomain: "casavalenciaproject.firebaseapp.com",
  projectId: "casavalenciaproject",
  storageBucket: "casavalenciaproject.appspot.com",
  messagingSenderId: "716944083756",
  appId: "1:716944083756:web:dc7e50dc748ca4e391ba89",
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
