import React,{useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './hero.css';
import hero1 from '../../../assets/img/hero_bg_3.jpg'
import hero2 from '../../../assets/img/hero_bg_1.jpg'
import hero3 from '../../../assets/img/hero_bg_2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='hero'>
         <div class="hero-title container">
                    <div class="containers">
                        <h1 class="animate" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">THINK PROPERTY.<br/>THINK DUBAI</h1>
                        <form class="animate" id="form-hero">
                            <label for="form-hero-email">Enter your email for the latest news</label>
                            <div class="row">
                                <div class="col-md-5 col-sm-5">
                                    <div class="input-group">
                                        <input type="email" class="form-control" id="form-hero-email" name="email" placeholder="Your email" required=""/>
                                        <span class="input-group-btn">
                                            <button class="button" type="submit">search</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                     
                    </div>
                
                </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-overlay"><img src={hero1} alt="" data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={hero2} alt="" data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay"><img src={hero3} alt="" data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Hero;
