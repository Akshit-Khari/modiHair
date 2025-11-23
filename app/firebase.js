import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAEmn7188FGrufYK4-d684QDNsE2zdzb7c",
  authDomain: "modihair-b67c5.firebaseapp.com",
  projectId: "modihair-b67c5",
  storageBucket: "modihair-b67c5.firebasestorage.app",
  messagingSenderId: "173110983430",
  appId: "1:173110983430:web:38ab83a3e315678673bc87"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
