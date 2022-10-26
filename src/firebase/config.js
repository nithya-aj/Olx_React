import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDDIvKwB0uEBQz3h_b-7EifwllYkVFJ8Ws",
  authDomain: "fir-35b8c.firebaseapp.com",
  projectId: "fir-35b8c",
  storageBucket: "fir-35b8c.appspot.com",
  messagingSenderId: "598703126341",
  appId: "1:598703126341:web:424c8b0a139f646124b02c",
  measurementId: "G-G9FRJZ6CJ0"
};

export default firebase.initializeApp(firebaseConfig)