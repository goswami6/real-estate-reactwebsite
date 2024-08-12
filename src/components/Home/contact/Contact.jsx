import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log(formData);
  };

  return (
    <div className="block" id="contact">
      <div className="container">
        <h2>Contact.</h2>
        <div className="contact map">
          <div className="row mobile-about">
            <div className="col-md-6 col-sm-6 about-row" data-scroll-reveal="enter bottom and move 20px">
              <h3>Map</h3>
              <div className="map" id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281993904!2d54.897823313520995!3d25.076280448422047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1722436591631!5m2!1sen!2sin" width="600" height="450"  allowfullscreen
               loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 about-row">
                  <h3>Address</h3>
                  <address>
                    Your Company<br />
                    4877 Spruce Drive<br />
                    West Newton, PA 15089<br /><br />
                    +1 (734) 123-4567<br />
                    <a href="mailto:hello@example.com">hello@example.com</a>
                  </address>
                </div>
                <div className="col-md-6 col-sm-6 about-row">
                  <h3>Social</h3>
                  <div className="social">
                    <a href="#" className="roll-effect"><i className="social_facebook_circle"></i> Facebook</a>
                    <a href="#"><i className="social_twitter_circle"></i> Twitter</a>
                    <a href="#"><i className="social_instagram_circle"></i> Instagram</a>
                    <a href="#"><i className="social_skype_circle"></i> Skype</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 about-row" data-scroll-reveal="enter top and move 20px">
              <h3>Contact form</h3>
              <form id="form-contact" method="post" className="clearfix inputs-underline" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="form-contact-name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="form-contact-email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="form-contact-message"
                        rows="8"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix">
                  <button type="submit" className="btn pull-right btn-primary btn-rounded" id="form-contact-submit">Send a Message</button>
                </div>
                <div id="form-contact-status"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Contact;
