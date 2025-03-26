// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCj4X4JwMJGfu9MQqEfpIq7jDCeiR-13FI",
  authDomain: "dropfisher-34493.firebaseapp.com",
  projectId: "dropfisher-34493",
  storageBucket: "dropfisher-34493.firebasestorage.app",
  messagingSenderId: "350001066724",
  appId: "1:350001066724:web:9d87da264e6787fca232f1",
  measurementId: "G-PZ6WZL8L7C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
