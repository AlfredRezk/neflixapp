"use client";
import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


console.log(process.env.FIREBASE_API_KEY)
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId:process.env.NEXT_PUBLIC_senderId,
  appId:process.env.NEXT_PUBLIC_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  // Register
  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      router.push("/profile");
      toast.success("Registered Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Login a user
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // user observer
  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  const logOut = () => {
    signOut(auth);
    toast.success("Logged Out Successfully");
  };

  const signupProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/profile");
      toast.success("Logged In Successfully");
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.warn("Please check your mail box!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = { createUser, signIn, currentUser, logOut, signupProvider , forgotPassword};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
