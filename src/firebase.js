import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOrcvKYPZEIy1QWY5ocuUgWOARyJbzWyU',
  authDomain: 'slack-clone-challenge-f7e2e.firebaseapp.com',
  projectId: 'slack-clone-challenge-f7e2e',
  storageBucket: 'slack-clone-challenge-f7e2e.appspot.com',
  messagingSenderId: '284890487062',
  appId: '1:284890487062:web:4bddecc9d77d0b20289837',
  measurementId: 'G-5GVBGZZ91J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
