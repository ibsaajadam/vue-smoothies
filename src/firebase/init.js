import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAaYPewxrA_Hsi5pxhGF9VDoymCg4w64jY",
  authDomain: "your-recipes-vue.firebaseapp.com",
  projectId: "your-recipes-vue",
  storageBucket: "your-recipes-vue.appspot.com",
  messagingSenderId: "682164151480",
  appId: "1:682164151480:web:366049c33c17b61611804d",
  measurementId: "G-EFQH0G3DFP"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export default { db }

export const auth = firebase.auth();
