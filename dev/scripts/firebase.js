import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCPJrt4XZ2DOGi9xdke1Ashb4iEtyz7TvI",
    authDomain: "reactpractise0618.firebaseapp.com",
    databaseURL: "https://reactpractise0618.firebaseio.com",
    projectId: "reactpractise0618",
    storageBucket: "reactpractise0618.appspot.com",
    messagingSenderId: "688781258170"
};
firebase.initializeApp(config);

// Below exports the auth module of Firebase, as well as the Google Auth Provider so that we'll be able to use Google Authentication for sign in anywhere inside of our application.

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;