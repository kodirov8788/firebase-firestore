import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBVJG8tQ5Zgquvlnf7LL1YUtu3UruTkSOM",
    authDomain: "online-shop-79ff0.firebaseapp.com",
    projectId: "online-shop-79ff0",
    storageBucket: "online-shop-79ff0.appspot.com",
    messagingSenderId: "205741945151",
    appId: "1:205741945151:web:592324d947bd863864e38a"
};
const app = initializeApp(firebaseConfig);

export default app