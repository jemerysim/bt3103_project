import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';



var firebaseConfig = {
  apiKey: "AIzaSyAk9zigyNZkdwN1N44LUGr8hoJ9NYVBnUc",
  authDomain: "bt3103-project-350ef.firebaseapp.com",
  projectId: "bt3103-project-350ef",
  storageBucket: "bt3103-project-350ef.appspot.com",
  messagingSenderId: "745181053735",
  appId: "1:745181053735:web:6ddbe6866f38d0ba039f02",
  measurementId: "G-MVZTRNKYWF"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
var database = firebase.firestore();
export default database;