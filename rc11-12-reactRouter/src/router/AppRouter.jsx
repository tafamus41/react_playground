import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/courses" element={<CourseCard/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/paths" element={<Paths/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default AppRouter