import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgfCqEs6LP1eHmNEO13jJ1expBBZsl3gE",
  authDomain: "hawk-talk.firebaseapp.com",
  databaseURL: "https://hawk-talk.firebaseio.com",
  projectId: "hawk-talk",
  storageBucket: "hawk-talk.appspot.com",
  messagingSenderId: "488414350568",
  appId: "1:488414350568:web:0528ce03e8dd4d490e8d5d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;