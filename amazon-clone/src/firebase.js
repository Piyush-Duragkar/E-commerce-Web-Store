import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC8beSV2bH1P91Eb01XenS_WDUfRK-B3Fw",
    authDomain: "clone-7bb5f.firebaseapp.com",
    projectId: "clone-7bb5f",
    storageBucket: "clone-7bb5f.appspot.com",
    messagingSenderId: "586829447758",
    appId: "1:586829447758:web:3b1c9443651dfe8776b91f",
    measurementId: "G-S5HR3X66D3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = firebaseApp.auth();
  export default firebaseApp;

  // export {db, auth};
