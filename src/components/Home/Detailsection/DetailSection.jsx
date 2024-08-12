import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Detailsection.css';

// import required modules
import { Pagination } from 'swiper/modules';
import gallery from '../../../assets/img/gallery-01.jpg'
import gallery1 from '../../../assets/img/gallery-02.jpg'
import gallery3 from '../../../assets/img/image-video.jpg'

const DetailSection = () => {
  return (
    <div className="block">
            <div className="container">
                <div className="detail left-align">
                    <div className="title" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="400">
                        <h3 className="framed">Architecture & Design</h3>
                    </div>
                    <div className="row mobile-about">
                        <div className="col-md-7 col-sm-7 about-row"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div className="gallery">
                            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper about-swiper"
      >
       <SwiperSlide className="swiper-slide-overlay"><img src={gallery} alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={gallery1} alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={gallery3} alt=""/></SwiperSlide>
       
      </Swiper>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 about-row"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div className="description" data-scroll-reveal="enter right and move 20px">
                                <h4>High quality materials</h4>
                                <p>Proin orci nisl, posuere viverra erat ut, pellentesque interdum urna. Curabitur
                                    eu risus convallis, auctor augue id, pharetra neque. Morbi pretium neque ac varius
                                    imperdiet. Aliquam sed sapien eget massa hendrerit aliquet. Integer auctor vel
                                    ligula eget faucibus
                                </p>
                                <h4>Soundproof rooms</h4>
                                <p>Donec tincidunt fermentum purus, eu pharetra arcu scelerisque a. Maecenas felis eros,
                                    volutpat ac justo non, imperdiet porttitor lorem. Nulla suscipit mi a arcu sollicitudin,
                                    sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail right-align">
                    <div className="title" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="400">
                        <h3 className="framed">Warm & Cozy Interior</h3>
                    </div>
                    <div className="row mobile-about">
                        <div className="col-md-5 col-sm-5 about-row"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div className="description" data-scroll-reveal="enter left and move 20px after">
                                <h4>Feel your new home</h4>
                                <p>Proin orci nisl, posuere viverra erat ut, pellentesque interdum urna. Curabitur
                                    eu risus convallis, auctor augue id, pharetra neque. Morbi pretium neque ac varius
                                    imperdiet. Aliquam sed sapien eget massa hendrerit aliquet. Integer auctor vel
                                    ligula eget faucibus. Donec tincidunt fermentum purus, eu pharetra arcu scelerisque a.
                                    Maecenas felis eros, volutpat ac justo non, imperdiet porttitor
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7  about-row"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div className="gallery" data-scroll-reveal="enter right and move 20px">
                            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide className="swiper-slide-overlay"><img src={gallery1} alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={gallery3} alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={gallery} alt=""/></SwiperSlide>
     
      </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DetailSection
