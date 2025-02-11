import React from 'react';
import About from '../pagesHome/aboutHome';
import Services from '../pagesHome/servicesHome';
import CounterCourses from '../components/counterCourses';
import Courses from '../pagesHome/coursesHome';
import Hero3 from '../components/hero3'

const App = () => {
  return (
    <>
        <Hero3 />
        <About />
        <Courses />
        <Services />
        
        
    </>
  );
}

export default App;
