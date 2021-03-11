import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyARFJt6iFN8oNLvdHtSTn4gTTjWvEeBD4M",
  authDomain: "firegram-9fba3.firebaseapp.com",
  databaseURL: "https://firegram-9fba3-default-rtdb.firebaseio.com",
  projectId: "firegram-9fba3",
  storageBucket: "firegram-9fba3.appspot.com",
  messagingSenderId: "1014659849943",
  appId: "1:1014659849943:web:3627a5d06031cd8f665a92",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
