import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'; 

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAPTK7_XC5G5w2xQD5YKyQYFZ5JMjxrma4",
  authDomain: "firegram-5410b.firebaseapp.com",
  projectId: "firegram-5410b",
  storageBucket: "firegram-5410b.appspot.com",
  messagingSenderId: "900053780539",
  appId: "1:900053780539:web:54e7b731116156f2e0f41e"
};

// Initialize Firebase
firebase.initializeApp(config);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };