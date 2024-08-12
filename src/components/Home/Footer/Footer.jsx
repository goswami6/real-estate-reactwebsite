import React from 'react';
import './footer.css'; 
import logo from '../../../assets/img/logo1.png'
import footer from '../../../assets/img/footer-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="page-footer" className="block background-is-dark">
      <div className="container">
        <a href="#" className="brand">
          <img src={logo} alt="Logo" />
        </a>
        <div className="row footer_top mobile-about">
          <div className="col-md-4 col-sm-4 about-row">
            <p>
              At Crown Real Estate, we understand the significance of finding the perfect property or managing your real estate investment with precision.
            </p>
          </div>
          <div className="col-md-8 col-sm-8 about-row">
            <div className="contact-data text-align-right">
              <figure>+1 (734) 123-4567</figure>
              <a href="mailto:hello@archits.com">hello@archits.com</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="note">(C) 2016 All Rights Reserved</div>
        <div className="numbers">
          <h2>Investment Opportunity.</h2>
          <div className="row mobile-about">
            <div className="col-md-2 col-sm-2 about-row">
              <div className="number">
                <figure>10</figure>
                <p>ROI Guaranteed</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 about-row">
              <div className="number">
                <figure>10</figure>
                <p>Years Rentals <br />Guaranteed</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 about-row">
              <div className="number">
                <figure>100</figure>
                <p>Buyback Guarantee</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 about-row">
              <div className="number">
                <figure>10</figure>
                <p>Years Free Service & <br />Maintenance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="to-top">
          <a href="#page-top" className="arrow-up framed scroll" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} /> 
          </a>
        </div>
      </div>
      <div className="background-wrapper">
        <div className="bg-transfer opacity-30">
          <img src={footer} alt="Background" />
        </div>
        <div className="background-color background-color-black"></div>
      </div>
    </footer>
  );
};

export default Footer;
