import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import './Gallery.css';

// import required modules
import { Navigation } from 'swiper/modules';
import gallery from '../../../assets/img/gallery-big-01.jpg'
import gallery2 from '../../../assets/img/gallery-big-02.jpg'
import gallery3 from '../../../assets/img/gallery-big-03.jpg'

const Gallery = () => {
    
  return (
    
      <div className="block" id="gallery">
        <div className="container">
          <h2 className='gtitle'>Gallery.</h2>
        </div>
     <div className="big-gallery">
     <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="slide">
                    <div className="container">
                        <img src={gallery} alt=""/>
                        <div className="description">
                            <h3 className="framed">Front View</h3>
                        </div>
                    </div>
                    
                </div></SwiperSlide>
        <SwiperSlide><div className="slide">
                    <div className="container">
                        <img src={gallery2} alt=""/>
                        <div className="description">
                            <h3 className="framed">Front View</h3>
                        </div>
                    </div>
                    
                </div></SwiperSlide>
        <SwiperSlide><div className="slide">
                    <div className="container">
                        <img src={gallery3} alt=""/>
                        <div className="description">
                            <h3 className="framed">Front View</h3>
                        </div>
                    </div>
                    
                </div></SwiperSlide>
        
      </Swiper>
     </div>
    </div>
  )
}

export default Gallery
