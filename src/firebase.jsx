// Import Firebase modules for initialization and authentication
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration containing API keys and project details
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_AUTHDOMAIN,
  projectId: import.meta.env.VITE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_MESSAGESENDINGID,
  appId: import.meta.env.VITE_API_APPID,
  measurementId: import.meta.env.VITE_API_MEASUREMENTID
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication instance from the initialized Firebase app
export const auth = getAuth(app);

// Export the initialized Firebase app
export default app;
