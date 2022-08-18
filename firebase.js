import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBgRnYxNjBrg6AXbM3t2InYTHH2ABelHwM",
    authDomain: "facebook-2-1.firebaseapp.com",
    projectId: "facebook-2-1",
    storageBucket: "facebook-2-1.appspot.com",
    messagingSenderId: "1007037664825",
    appId: "1:1007037664825:web:6d0c18452ac9ee1173c7e8"
};


// Use these for db & auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dbPosts = collection(db, 'posts');
const dbAccounts = collection(db, 'accounts');


export {app, db , dbPosts, dbAccounts}

