// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACVvTJuIzAlPVD7PH4Eajx_0sb2BReY_k",
  authDomain: "client-car-doctor-17e0a.firebaseapp.com",
  projectId: "client-car-doctor-17e0a",
  storageBucket: "client-car-doctor-17e0a.appspot.com",
  messagingSenderId: "897966969562",
  appId: "1:897966969562:web:4368ae6ad6499909d70be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
