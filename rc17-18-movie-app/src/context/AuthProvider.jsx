import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useContext, useState } from 'react'
import {auth} from "../auth/Firebase"
import { useNavigate } from 'react-router-dom';

export const AuthContext=createContext()

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(false)
const navigate=useNavigate()

const createUser=async(email,password)=>{
  try {
  let userCredential=  await createUserWithEmailAndPassword(auth, email, password)
  navigate("/login")
  console.log("registered successfully")
  } catch (error) {
    console.log(error)
  }
}
const values={currentUser,createUser};
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider