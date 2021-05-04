import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAirI3nZUUhYmf29T-0RyaXPSqhsrc5oBk",
    authDomain: "slack-clone-chanllenge-day3-cp.firebaseapp.com",
    projectId: "slack-clone-chanllenge-day3-cp",
    storageBucket: "slack-clone-chanllenge-day3-cp.appspot.com",
    messagingSenderId: "1015051167696",
    appId: "1:1015051167696:web:229e13a79de9bce5febbd5"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;