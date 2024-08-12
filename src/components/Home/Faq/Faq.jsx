import React, { useState } from 'react';
import './Faq.css'
import FAQ from "./FAQs";

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
          question: "How many programmers does it take to screw a lightbulb?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "Who is the most awesome person?",
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "How many questions does it take to makes a succesful FAQ Page?",
          answer: "This many!",
          open: false
        }
      ]);
    
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };

  return (
    <div className="block">
      <div className="container">
        <h2>FAQ.</h2>
        <div className="row mobile-about">
        <div className="faqs">
    {faqs.map((faq, index) => (
      <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
    ))}
  </div>
          <div className="col-md-4 col-sm-4 equal-height about-row">
            <div className="framed vertical-aligned-wrapper" data-scroll-reveal="enter right and move 20px">
              <form className="inputs-underline vertical-aligned-element middle">
                <label>Subscribe to our newsletter to get the latest information</label>
                <div className="input-group">
                  <input type="text" className="form-control" name="email" placeholder="Your email" />
                  <span className="input-group-btn">
                    <button className="btn" type="submit">
                      <i className="arrow_right"></i>
                    </button>
                  </span>
                </div>
                <p className="note">*Only relevant information, no spam</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Faq;
