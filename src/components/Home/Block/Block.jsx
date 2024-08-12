import React from 'react'
import "./block.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHourglass, faX} from '@fortawesome/free-solid-svg-icons';

const Block = () => {
  return (
    <div className="block">
            <div className="container">
                <div className="row mobile-about block-row">
                    {/* Stage 1 */}
                    <div className="col-md-3 col-sm-3">
                        <div className="stage completed" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div className="icon">
                            <FontAwesomeIcon icon={faCheck} className='i'/>
                            </div>
                            <div className="description" >
                                <h3>1. Stage</h3>
                                <h2>Planning</h2>
                                <figure>Completed</figure>
                            </div>
                        </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="col-md-3 col-sm-3">
                        <div className="stage completed" data-aos="fade-down"
     data-aos-offset="330"
     data-aos-easing="ease-in-sine">
                            <div className="icon">
                            <FontAwesomeIcon icon={faCheck} className='i'/>
                            </div>
                            <div className="description">
                                <h3>2. Stage</h3>
                                <h2>Building</h2>
                                <figure>Completed</figure>
                            </div>
                        </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="col-md-3 col-sm-3">
                        <div className="stage in-progress" data-aos="fade-down"
     data-aos-offset="350"
     data-aos-easing="ease-in-sine">
                            <div className="icon">
                            <FontAwesomeIcon icon={faHourglass} className='i'/>
                            </div>
                            <div className="description">
                                <h3>3. Stage</h3>
                                <h2>Finishing works</h2>
                                <figure>In progress</figure>
                            </div>
                        </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="col-md-3 col-sm-3">
                        <div className="stage not-completed" data-aos="fade-down"
     data-aos-offset="370"
     data-aos-easing="ease-in-sine">
                            <div className="icon">
                            <FontAwesomeIcon icon={faX} className='i'/>
                            </div>
                            <div className="description">
                                <h3>4. Stage</h3>
                                <h2>Project done</h2>
                                <figure>Not completed</figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Block
