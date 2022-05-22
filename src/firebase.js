import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA-8otJlnE5nL5m6LzHcoi2wwpz8yk48lU",
  authDomain: "login-form-444.firebaseapp.com",
  projectId: "login-form-444",
  storageBucket: "login-form-444.appspot.com",
  messagingSenderId: "638695290386",
  appId: "1:638695290386:web:c7de03a8bc71bc37704acb",
  measurementId: "G-GCTLSX0ZV5"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth();
const storage = getStorage();

export { app, auth, storage };