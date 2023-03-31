import React from 'react'
import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Contact from './components/contact/Contact'
import Login from './components/Auth/Login/Login'

import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Addcourse from './components/Addcourse/Addcourse'



const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
    <Router>
    <Routes>
    <Route path='/login' exact Component={Login} /> 
     </Routes>
    </Router>
    <Router>
    <Header/>
    <Routes>


    
    <Route path='/' exact Component={Home} /> 
    <Route path='/about' exact Component={About} /> 
    <Route path='/courses' exact Component={CourseHome} /> 
    <Route path='/contact' exact Component={Contact} />
    <Route path='/addcourse' exact Component={Addcourse} /> 
    

   </Routes>
    </Router>
     
     
      </>
  )
}

export default App