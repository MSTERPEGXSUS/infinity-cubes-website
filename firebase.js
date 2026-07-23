// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmDdyEfKeHHoHlZtnJWtRqt4aGln4SN9g",
  authDomain: "infinity-cubes-v3.firebaseapp.com",
  projectId: "infinity-cubes-v3",
  storageBucket: "infinity-cubes-v3.firebasestorage.app",
  messagingSenderId: "5157861034",
  appId: "1:5157861034:web:9ded75b2f52f061f9182d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export Services
export { app, db, auth, storage };