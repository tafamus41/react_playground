import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from '../pages/NotFound';
const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/courses" element={<CourseCard/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/paths" element={<Paths/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default AppRouter