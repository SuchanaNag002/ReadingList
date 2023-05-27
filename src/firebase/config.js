import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBU8DIVSqLOkfI61dxalGcUqzF1X711cPI",
  authDomain: "readlist-3d6a2.firebaseapp.com",
  projectId: "readlist-3d6a2",
  storageBucket: "readlist-3d6a2.appspot.com",
  messagingSenderId: "512409986442",
  appId: "1:512409986442:web:c7e64a10135fe6f3619473",
  measurementId: "G-T12LDLJ51T"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const db=getFirestore()

//init firebase auth
const auth=getAuth()

export {db,auth}