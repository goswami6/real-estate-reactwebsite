import React from 'react'
import Header from "./Navbar/Header"
import Hero from './hero/Hero'
import About from './about/About'
import Aboutus from './Aboutus/Aboutus'
import Gallery from './Gallery/Gallery'
import Pricing from './pricing/Pricing'
import Testimonial from './Testimonials/Testimonial'
import Contact from './contact/Contact'
import Scrolling from './Scrolling/Scrolling'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className="App">

    <Hero/>
    <About/>
    <Aboutus/>
    <Gallery/>
    <Pricing/>
   <Testimonial/>
   <Contact/>
   <Scrolling/>

  </div>
  )
}

export default Home
