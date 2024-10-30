import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBdkACl-yqW6_eY93jOfQXahVqabn4daYc",
    authDomain: "movie-app-mustafa41.firebaseapp.com",
    projectId: "movie-app-mustafa41",
    storageBucket: "movie-app-mustafa41.firebasestorage.app",
    messagingSenderId: "699563035322",
    appId: "1:699563035322:web:44a7f68951f199e14c1083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);