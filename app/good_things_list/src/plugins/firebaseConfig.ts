import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAFXfHvHTjcbcVwK8ftXWxp7ydbVXYmhBc",
    authDomain: "good-things-list.firebaseapp.com",
    projectId: "good-things-list",
    storageBucket: "good-things-list.appspot.com",
    messagingSenderId: "672052810567",
    appId: "1:672052810567:web:204e438cbcfdf63664b262",
    measurementId: "G-BC3XK6XMHZ"
};

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp