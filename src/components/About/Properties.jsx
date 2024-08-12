import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PROPERTIES } from '../../constant/data';
import Item from './Item';

const Properties = () => {
  return (
    <section className="container bg-[rgba(0,0,0,0.05)] mb-8 s:mb-10 overflow-hidden">
      <div className="pb-[38rem] pt-[4rem] xl:py-28 xl:pb-[30rem]">
        <span className="text-[15px]">Your Future Home Awaits!</span>
        <h2 className="h2">Find Your Dream Here</h2>
        <div className="flex justify-between mt-8 mb-6">
          <h5>
            <span className="font-bold">Showing 1-9</span> out of 2k properties
          </h5>
          <Link
            to="/"
            className="bg-white text-xl rounded-md h-10 w-10 p-2 border">
            <FontAwesomeIcon icon={faRightLeft} />
          </Link>
        </div>

        {/* Swiper Container */}
        <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1124: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="h-[488px] md:h-[533px] xl:h-[422px] mt-5 top-[71%] xl:w-[80%] w-[95%] align-top overflow-x-hidden"
          >
            {PROPERTIES.map((property) => (
              <SwiperSlide
                key={property.title}
                className='h-[100%] rounded-xl relative bg-transparent'>
                <Item property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
};




export default Properties;
