import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMfzJxiQZp6spXNdUkaKItWhijDNKcabs",
  authDomain: "slack-clone-8e975.firebaseapp.com",
  projectId: "slack-clone-8e975",
  storageBucket: "slack-clone-8e975.appspot.com",
  messagingSenderId: "121392365460",
  appId: "1:121392365460:web:b44473df81b5724b5e5981",
  measurementId: "G-X09TB60JGM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
