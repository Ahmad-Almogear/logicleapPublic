
import React from 'react'
import About from './pages/about'
import Contact from './pages/contact'
import CourseDetails from './pages/courseDetails'
import CourseDetails2 from './pages/courseDetails2'
import Courses from './pages/courses'
import Index from './pages'
import Login from './pages/login'
import Question from './pages/question'
import ServiceRequest from './pages/serviceRequest'
import Services from './pages/services'
import DervicesDetails from './pages/servicesDetails'
import SuccessStory from './pages/successStory'
import Header from './components/header'
import Home from './pages/home'
import Partner from './components/partner'
import Footer from './components/footer'
import Hero from './components/hero'
import CounterCourses from './components/counterCourses'
import CounterServices from './components/counterServices'
import Features from './components/Features'
import RegistrationCourses from './pages/registrationCourses'
import NavServices from './components/navServices'
import RegistrationServices from './pages/registrationServices'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import Courses2 from './pages/courses2'
import Register from './pages/register'
import Partner2 from './components/partner2'
import Header2 from './components/header2'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'

function App() {
  return (
  <div>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='courseDetails' element={<CourseDetails/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='question' element={<Question/>}/>
      <Route path='serviceRequest' element={<ServiceRequest/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='dervicesDetails' element={<DervicesDetails/>}/>
      <Route path='successStory' element={<SuccessStory/>}/>
      <Route path='header' element={<Header/>}/>
      <Route path='hero' element={<Hero/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='home' element={<Home />}/>
      <Route path='partner' element={<Partner/>} />
      <Route path='counterCourses' element={<CounterCourses />}/>
      <Route path='counterServices'element={<CounterServices/>}/>
      <Route path='features' element={<Features />}/>
      <Route path='RegistrationCourses' element={<RegistrationCourses />}/>
      <Route path='registrationServices' element={<RegistrationServices />}/>
      <Route path='navServices' element={<NavServices/>}/>
      <Route path='Hero2' element={<Hero2/>}/>
      <Route path='Hero3' element={<Hero3/>}/>
      <Route path='courses2' element={<Courses2/>}/>
      <Route path='courseDetails2' element={<CourseDetails2/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='partner2' element={<Partner2/>}/>
      <Route path='header2'  element={<Header2/>}/>
    </Routes>
    </BrowserRouter>
  

  </div>
  
  )
}

export default App