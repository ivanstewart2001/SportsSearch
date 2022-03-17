// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAyLgjdt_LAuScUk__-J48_Cd1f2r_K0wI",

  authDomain: "sportssearch-2d8a6.firebaseapp.com",

  projectId: "sportssearch-2d8a6",

  storageBucket: "sportssearch-2d8a6.appspot.com",

  messagingSenderId: "869067193982",

  appId: "1:869067193982:web:df7fe91f4cdaa11eda622f"

};

// Initialize Firebase
let app
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig)
} else {
  app = firebase.default.app()
}

const auth = firebase.default.auth()

export { auth, firebase }