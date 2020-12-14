import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDh2BVEoA-dsby1538P9szCNAoiK8qcWkg",
    authDomain: "fb-mern-cfa7c.firebaseapp.com",
    projectId: "fb-mern-cfa7c",
    storageBucket: "fb-mern-cfa7c.appspot.com",
    messagingSenderId: "783035120362",
    appId: "1:783035120362:web:9e6162de186bc0c97ab593"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db