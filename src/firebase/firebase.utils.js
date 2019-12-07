import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBX8_cYb0GYBw8zMnyfLQfkxbAMxeAf898",
    authDomain: "ecom-db-4ff8c.firebaseapp.com",
    databaseURL: "https://ecom-db-4ff8c.firebaseio.com",
    projectId: "ecom-db-4ff8c",
    storageBucket: "ecom-db-4ff8c.appspot.com",
    messagingSenderId: "24923813353",
    appId: "1:24923813353:web:f69c23d8edb3a51a910778",
    measurementId: "G-P4KNREW5LE"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;