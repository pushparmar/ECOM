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

export const CreateUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const SnapShot = await userRef.get();
    if(!SnapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error creating user  ${error}`)
        }
    }
    return userRef;
}




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;