// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multi-agent-ai-2fa2d.firebaseapp.com",
  projectId: "multi-agent-ai-2fa2d",
  storageBucket: "multi-agent-ai-2fa2d.firebasestorage.app",
  messagingSenderId: "1058139975518",
  appId: "1:1058139975518:web:db48e78cc823b0d65e29cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
