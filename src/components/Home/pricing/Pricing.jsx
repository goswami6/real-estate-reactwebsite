import React from 'react';
import './Pricing.css';
import Faq from '../Faq/Faq';


const Pricing = () => {
  return (
    <>
    <div className="block" id="pricing">
      <div className="container">
        <h2>Pricing.</h2>
        <div className="row price-container">
          <div className="pricing-boxes mobile-about">
            <div className="col-md-3 col-sm-3 about-row">
              <div className="price-box description">
                <h3>Choose your apartment</h3>
                <div className="price old">Old price</div>
                <div className="price">New price</div>
                <div className="values">
                  <figure>Apartment area</figure>
                  <figure>Balcony area</figure>
                  <figure>Parking place</figure>
                  <figure>Free apartments</figure>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 about-row">
              <div className="price-box framed" data-scroll-reveal="enter bottom and move 20px">
                <h3>2 Room Apartment</h3>
                <div className="price old">$99,000</div>
                <div className="price">$79,000</div>
                <div className="values">
                  <figure>
                    83m<sup>2</sup>
                  </figure>
                  <figure>
                    26m<sup>2</sup>
                  </figure>
                  <figure className="not-available">
                    <i className="icon_close"></i>
                  </figure>
                  <figure>12</figure>
                </div>
                <a
                  href="#"
                  className="btn btn-rounded btn-framed btn-light-frame btn-primary"
                  data-toggle="modal"
                  data-target="#floor-modal"
                >
                  Apartment Details
                </a>
                <div className="price-box-footer">
                  <a href="#" className="btn btn-rounded btn-primary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 about-row">
              <div className="price-box framed promoted" data-scroll-reveal="enter bottom and move 20px after 0.2s">
                <div className="promotion-title">
                  <span>Best value for money</span>
                </div>
                <h3>3 Room Apartment</h3>
                <div className="price old">$99,000</div>
                <div className="price">$79,000</div>
                <div className="values">
                  <figure>
                    135m<sup>2</sup>
                  </figure>
                  <figure>
                    45m<sup>2</sup>
                  </figure>
                  <figure className="available">
                    <i className="icon_check"></i>
                  </figure>
                  <figure>7</figure>
                </div>
                <a
                  href="#"
                  className="btn btn-rounded btn-framed btn-light-frame btn-primary"
                  data-toggle="modal"
                  data-target="#floor-modal"
                >
                  Apartment Details
                </a>
                <div className="price-box-footer">
                  <a href="#" className="btn btn-rounded btn-primary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 about-row">
              <div className="price-box framed" data-scroll-reveal="enter bottom and move 20px after 0.4s">
                <h3>4 Room Apartment</h3>
                <div className="price old">$129,000</div>
                <div className="price">$109,000</div>
                <div className="values">
                  <figure>
                    198m<sup>2</sup>
                  </figure>
                  <figure>
                    67m<sup>2</sup>
                  </figure>
                  <figure className="available">
                    <i className="icon_check"></i>
                  </figure>
                  <figure>9</figure>
                </div>
                <a
                  href="#"
                  className="btn btn-rounded btn-framed btn-light-frame btn-primary"
                  data-toggle="modal"
                  data-target="#floor-modal"
                >
                  Apartment Details
                </a>
                <div className="price-box-footer">
                  <a href="#" className="btn btn-rounded btn-primary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Faq/>
  
    </>
  );
};

export default Pricing;
