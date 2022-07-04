/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import { toast } from 'react-toastify';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  //GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  //query,
  //getDocs,
  //where,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDiaxjSpHVnbgS4zYobDLQtWl_m2OkUS7w",
  authDomain: "re-books-dbc4e.firebaseapp.com",
  projectId: "re-books-dbc4e",
  storageBucket: "re-books-dbc4e.appspot.com",
  messagingSenderId: "116083982026",
  appId: "1:116083982026:web:d52430451c65f58f57fe33",
  measurementId: "G-13642LDRM5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
//const googleProvider = new GoogleAuthProvider();

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error('Usuário invalido');
    console.log(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
      books: [],
    });
  } catch (err) {
    toast.error(err);
    console.log(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  storage,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};

//may be used in future
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const { user } = res;
//     const q = query(collection(db, 'users'), where('uid', '==', user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: 'google',
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     toast.error(err);
//     toast.error(err.message);
//   }
// };

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     toast('Password reset link sent!');
//   } catch (err) {
//     toast.error(err);
//     toast.error(err.message);
//   }
// };