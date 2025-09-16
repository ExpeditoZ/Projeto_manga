import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDbrKjlJreYDBvQj87frDiKBH8jkkvMFoI",
  authDomain: "mangas-b6016.firebaseapp.com",
  projectId: "mangas-b6016",
  storageBucket: "mangas-b6016.firebasestorage.app",
  messagingSenderId: "366707031882",
  appId: "1:366707031882:web:4f9ca15c9b9d5378764bb3",
  measurementId: "G-HMX18L7CXY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
