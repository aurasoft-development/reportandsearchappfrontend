import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfivjqBE2vhu7_jKUNHtpZjh6jEzevUIE",
  authDomain: "search-and-find-application.firebaseapp.com",
  projectId: "search-and-find-application",
  storageBucket: "search-and-find-application.appspot.com",
  messagingSenderId: "531178609897",
  appId: "1:531178609897:web:74a878d3b5515761b72478",
  measurementId: "G-EHP2N4P6BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
