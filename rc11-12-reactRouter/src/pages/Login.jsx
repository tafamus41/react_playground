import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate()
const[email,setEmail]=useState("")
const[password,setPass]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault()

  localStorage.setItem("EMAIL",JSON.stringify(email) )
  localStorage.setItem("PASS",JSON.stringify(password) )

   navigate("/contact")

}


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            EMAIL
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your email"
            required
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
           PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="desc"
            placeholder="Enter your password"
            required

            onChange={(e)=>setPass(e.target.value)}
            
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login