import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNv6GEoX4UgF5jXxIYHxsFbVpKt7ffeIw",
  authDomain: "webuilding-uz.firebaseapp.com",
  projectId: "webuilding-uz",
  storageBucket: "webuilding-uz.appspot.com",
  messagingSenderId: "598119473429",
  appId: "1:598119473429:web:a426d227c17727c561c91c",
  measurementId: "G-VJFH8XZVXR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);