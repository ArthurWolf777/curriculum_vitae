// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaZbiMXtVHy6s_huwA-vSCjBkGlAu2PRY",
    authDomain: "arturopulidodev.firebaseapp.com",
    projectId: "arturopulidodev",
    storageBucket: "arturopulidodev.appspot.com",
    messagingSenderId: "451563250880",
    appId: "1:451563250880:web:fe1f3e4e6acdf21d933925",
    measurementId: "G-KZ70F6CTJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);