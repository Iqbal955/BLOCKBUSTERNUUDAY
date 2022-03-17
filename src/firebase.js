import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCOLUf1qlidzdHtcqGlPXUAehoYtz21L6I",
    authDomain: "blockbuster-nuuday1.firebaseapp.com",
    projectId: "blockbuster-nuuday1",
    messagingSenderId: "261141755022",
    appId: "1:261141755022:web:c539562f74bca4a243c5df",
    measurementId: "G-CLRGWHR6BN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;