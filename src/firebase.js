import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwAQiByiDelnli3Pu-WMSe_ZqMwIvQItg",
  authDomain: "pearapp-449d9.firebaseapp.com",
  databaseURL: "https://pearapp-449d9-default-rtdb.firebaseio.com",
  projectId: "pearapp-449d9",
  storageBucket: "pearapp-449d9.appspot.com",
  messagingSenderId: "712995691641",
  appId: "1:712995691641:web:77cb912f77bc42728788a8",
  measurementId: "G-QN5SJQ03MP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, firestore, storage };