import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-sgvtLxr8QOyQAO6_j98HoeP-hBiLhuk",
  authDomain: "ecommerce-coderhouse-a0baa.firebaseapp.com",
  projectId: "ecommerce-coderhouse-a0baa",
  storageBucket: "ecommerce-coderhouse-a0baa.appspot.com",
  messagingSenderId: "1077987440038",
  appId: "1:1077987440038:web:981fb432b7bd226b1e8b67"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);