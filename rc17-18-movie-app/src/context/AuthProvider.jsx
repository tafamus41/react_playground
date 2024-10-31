import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from "../auth/Firebase"
import { useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';

export const AuthContext=createContext()

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(false)
const navigate=useNavigate()

useEffect(() => {
  userObserver()

  
}, [])



const signIn=async(email,password)=>{
  try {
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
  toastSuccessNotify("Logged in successfully")
  } catch (error) {
    toastErrorNotify(error.message)
  }
}
const createUser=async(email,password,displayName)=>{
  try {
  await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(auth.currentUser,{displayName})
  navigate("/")
  toastSuccessNotify("Registered successfully")
  } catch (error) {
    toastErrorNotify(error.message)
  }
}

const logOut=()=>{
  signOut(auth).then(()=>{
    toastSuccessNotify("Logged out successfully")
  }).catch((error)=>{
    toastErrorNotify(error.message)
  })
}
const userObserver=()=>{
  onAuthStateChanged(auth,(user)=>{
  if (user) {
    const {email,displayName,photoURL}=user
    setCurrentUser({email,displayName,photoURL})
    
  } else {
    setCurrentUser(false)
  }
})
};

const googleProvider=()=>{
  const provider=new GoogleAuthProvider()
  signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        toastErrorNotify(error.message);
      });
  };


const values={currentUser,createUser,signIn,logOut,googleProvider};
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider