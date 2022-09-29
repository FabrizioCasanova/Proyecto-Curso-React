
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8APYF3tBe3ZjxYa6e9JvWR6D57E45RIw",
  authDomain: "game-zone-15c55.firebaseapp.com",
  projectId: "game-zone-15c55",
  storageBucket: "game-zone-15c55.appspot.com",
  messagingSenderId: "54369374906",
  appId: "1:54369374906:web:1971e1262462dc8676e883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);