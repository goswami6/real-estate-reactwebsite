import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/pages/About_us'
import Listing from './components/pages/Listing';
import AddProperty from './components/pages/AddProperty';
import Booking from './components/pages/Booking';
import Favourties from './components/pages/Favourties';
import Header from './components/Home/Navbar/Header';
import Footer from './components/Home/Footer/Footer';







const App = () => {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path='/listing' element={<Listing />} />
  <Route path='/addproperty' element={<AddProperty />} />
  <Route path='/bookings' element={<Booking />} />
  <Route path='/favourties' element={<Favourties />} />
 </Routes>
 <Footer/>
 
 </BrowserRouter>
  )
}

export default App

