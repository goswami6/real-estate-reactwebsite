import React from 'react'
import './aboutus.css';
import hero from '../../../assets/img/hero_bg_2.jpg'
import play from "../../../assets/img/play-button.png";
import Block from '../Block/Block'
import DetailSection from '../Detailsection/DetailSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const Aboutus = () => {
  return (
    <>
    <div className="block" id="about">
    <div className="container about-container">
        <h2 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">About Crown Real Estate</h2>
        <div className="row mobile-about">
            {/* Column 1 */}
            <div className="col-md-6 col-sm-6 about-row" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">
                <h3>Place where you find yourself</h3>
                <p>Crown Real Estate is your premier partner in luxury real estate services, situated in the heart of London, UK. With a wealth of experience spanning decades in the industry, we specialize in delivering unparalleled services in sales, leasing, and property management.</p>
                <p>Our dedication to excellence and unwavering commitment to customer satisfaction have established us as a distinguished leader in the market, setting new standards of quality and professionalism.</p>
                <ul className="check-marks">
                    <li data-aos="fade-right"
     data-aos-offset="420"
     data-aos-easing="ease-in-sine">   <FontAwesomeIcon icon={faCircleCheck} />  Premium Properties</li>
                    <li data-aos="fade-right"
     data-aos-offset="440"
     data-aos-easing="ease-in-sine">  <FontAwesomeIcon icon={faCircleCheck} />Expert Agents</li>
                    <li data-aos="fade-right"
     data-aos-offset="460"
     data-aos-easing="ease-in-sine"> <FontAwesomeIcon icon={faCircleCheck} />Secure Transactions</li>
                    <li data-aos="fade-right"
     data-aos-offset="480"
     data-aos-easing="ease-in-sine"> <FontAwesomeIcon icon={faCircleCheck} />Many play areas for your kids</li>
                </ul>
            </div>

            {/* Column 2 */}
            <div className="col-md-6 col-sm-6 about-row">
                <h3 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Video presentation</h3>
                <a href="http://vimeo.com/24506451" className="video-player video-popup" data-scroll-reveal="enter bottom and move 50px">
                    <i className="play-icon arrow_triangle-right"></i>
                    <div className="has-overlay" data-aos="fade-left"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">
                        <img src={hero} alt="Video Thumbnail" />
                        <img src={play} alt="" className='play-icon' />
                    </div>
                </a>
                <figure className="note" data-aos="fade-left"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">Let’s check the benefits of this project from the architect</figure>
            </div>
        </div>
    </div>

    <div className="background-wrapper">
        <div className="background-color background-color-black opacity-5"></div>
    </div>

</div>
<Block/>
<DetailSection/>
</>

);
};


export default Aboutus
