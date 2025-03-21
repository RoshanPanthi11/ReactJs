import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
   <Navbar></Navbar>
   <Hero></Hero>
   <div className="container">
    <Tittle subTitle='OUR PROGRAM' title='What we offer'/>
   <Programs/>
   <About/>
   <Tittle subTitle='Gallery' title='Campus Photos'/>
   <Campus/>
   <Tittle subTitle='TESTIMONIALS' title='What Student Says'/>
   <Testimonials/>
   <Tittle subTitle='Contact Us' title='Get in Touch'/>
   <Contact/>
   </div>
   
   </>
  )
}

export default App