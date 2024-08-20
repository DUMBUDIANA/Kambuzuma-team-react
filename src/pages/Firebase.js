import firebase from "firebase/compat/app";
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCwMFfaWPGpm1c3k-6kI4P8qM34PFZKEU0",
    authDomain: "kambuzuma-final-auth.firebaseapp.com",
    projectId: "kambuzuma-final-auth",
    storageBucket: "kambuzuma-final-auth.appspot.com",
    messagingSenderId: "584012781544",
    appId: "1:584012781544:web:c87d4860fdc243bff7765d"
  };

  firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const projectAuth = firebase.auth();
export { projectAuth };