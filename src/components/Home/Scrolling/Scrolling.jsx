import React from 'react'
import './scrolling.css'
import Marquee from 'react-fast-marquee'
import logo1 from '../../../assets/img/logo-1.png';
import logo2 from '../../../assets/img/logo-2.png';
import logo3 from '../../../assets/img/logo-3.png';
import logo4 from '../../../assets/img/logo-4.png';
import logo5 from '../../../assets/img/logo-5.png';
import logo6 from '../../../assets/img/logo-6.png';
import logo7 from '../../../assets/img/logo-7.png';
import logo8 from '../../../assets/img/logo-8.png';

const Scrolling = () => {
  return (
    <div className='container scrolling'>
      <Marquee pauseOnClick>
        <div className='image_wrapper'>
            <img src={logo1} alt="" />
            
        </div>
        <div className='image_wrapper'>
        <img src={logo2} alt="" />
            
        </div>
        <div className='image_wrapper'>
        <img src={logo3} alt="" />
            
        </div>
        <div className='image_wrapper'>
        <img src={logo4} alt="" />
           
        </div>
        <div className='image_wrapper'>
        <img src={logo5} alt="" />
           
        </div>
        <div className='image_wrapper'>
        <img src={logo6} alt="" />
           
        </div>
        <div className='image_wrapper'>
        <img src={logo7} alt="" />
       
        </div>
        <div className='image_wrapper'> <img src={logo8} alt="" /></div>
      </Marquee>
    </div>
  )
}

export default Scrolling
