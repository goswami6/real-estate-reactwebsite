import React from 'react'
import './about.css'
import shield from '../../../assets/img/icon-white-shield.png';
import bg from '../../../assets/img/bg-01.jpg'

const About = () => {
  return (
    <div className="block background-is-dark ">
    <div className="container">
        <div className="row mobile-about">
            {/* Feature 1 */}
            <div className="col-md-4 col-sm-4 about-row">
                <div className="feature has-icon" data-scroll-reveal="enter left and move 20px">
                    <i className="icon">
                        <img src={shield} alt="Shield Icon" />
                    </i>
                    <div className="description">
                        <h3>Modern & Safe Living</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare felis. Nam velit neque, blandit id placerat</p>
                        <a href="#" className="btn btn-default btn-rounded arrow">Read More</a>
                    </div>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4 col-sm-4 about-row">
                <div className="feature has-icon" data-scroll-reveal="enter bottom and move 20px">
                    <i className="icon">
                        <img src={shield} alt="Pin Icon" />
                    </i>
                    <div className="description">
                        <h3>Peaceful Location</h3>
                        <p>Mauris ac ornare felis. Nam velit neque, blandit id placerat eu, venenatis at purus. Nunc maximus ultrices lacus</p>
                        <a href="#" className="btn btn-default btn-rounded arrow">Read More</a>
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4 col-sm-4 about-row">
                <div className="feature has-icon" data-scroll-reveal="enter right and move 20px">
                    <i className="icon">
                        <img src={shield} alt="Wallet Icon" />
                    </i>
                    <div className="description">
                        <h3>Great Starting Prices</h3>
                        <p>Nam velit neque, blandit id placerat eu, venenatis at purus. Nunc maximus ultrices lacus eu fringilla.</p>
                        <a href="#" className="btn btn-default btn-rounded arrow">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Background Wrapper */}
    <div className="background-wrapper">
        <div className="bg-transfer opacity-15">
            <img src={bg} alt="Background" />
        </div>
        <div className="background-color background-color-black"></div>
    </div>
</div>
);
};
  


export default About
