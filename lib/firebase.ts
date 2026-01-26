import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA9y9RnhSxpOhTp_pX4KZfMRzD64fzolXI",
    authDomain: "ayanpal01-48af1.firebaseapp.com",
    projectId: "ayanpal01-48af1",
    storageBucket: "ayanpal01-48af1.firebasestorage.app",
    messagingSenderId: "263129442181",
    appId: "1:263129442181:web:d55c95e710599d251cc6ec",
    measurementId: "G-5PFD2942CB"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Analytics can only be initialized in the browser
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }

export { app, auth, db };
