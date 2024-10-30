import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useContext, useState } from 'react'
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

const signIn=async(email,password)=>{
  try {
  let userCredential=  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
  toastSuccessNotify("Logged in successfully")
  } catch (error) {
    toastErrorNotify(error.message)
  }
}
const createUser=async(email,password)=>{
  try {
  let userCredential=  await createUserWithEmailAndPassword(auth, email, password)
  navigate("/login")
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
const values={currentUser,createUser,signIn,logOut};
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider