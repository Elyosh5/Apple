import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC02MSHtNftUncX41kvlJ3vxrHTad-nqCg",
  authDomain: "profile-4bda5.firebaseapp.com",
  projectId: "profile-4bda5",
  storageBucket: "profile-4bda5.firebasestorage.app",
  messagingSenderId: "521952678336",
  appId: "1:521952678336:web:56cc8143edbcb23bacb825"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;