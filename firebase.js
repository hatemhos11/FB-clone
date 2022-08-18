import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


// Use these for db & auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dbPosts = collection(db, 'posts');
const dbAccounts = collection(db, 'accounts');


export {app, db , dbPosts, dbAccounts}

