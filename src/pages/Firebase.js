import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCwMFfaWPGpm1c3k-6kI4P8qM34PFZKEU0",
    authDomain: "kambuzuma-final-auth.firebaseapp.com",
    projectId: "kambuzuma-final-auth",
    storageBucket: "kambuzuma-final-auth.appspot.com",
    messagingSenderId: "584012781544",
    appId: "1:584012781544:web:c87d4860fdc243bff7765d"
  };

  const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;