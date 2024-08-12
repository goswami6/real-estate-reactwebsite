import React, { useRef } from 'react'
import next from "../../../assets/img/next.png"
import back from "../../../assets/img/left-arrow.png"
import './testimonial.css'
const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
const slideForward = ()=> {
if(tx > -50){
  tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=> {
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
  
}

  return (
   <div className='tetimonial'>
    <img src={next} alt="" className='next-btn' onClick={slideForward}/>
    <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
    <div className="slider">
<ul ref={slider}>
  <li>
    <div className="slide">
      <div className="user-info">
        <div>
          <h3>John Doe</h3>
          <span>River Side Apartments</span>
        </div>
      </div>
      <p>Sed vel lorem et velit dictum rhoncus eget sed orci. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <div>
          <h3>John Doe</h3>
          <span>River Side Apartments</span>
        </div>
      </div>
      <p>Sed vel lorem et velit dictum rhoncus eget sed orci. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <div>
          <h3>John Doe</h3>
          <span>River Side Apartments</span>
        </div>
      </div>
      <p>Sed vel lorem et velit dictum rhoncus eget sed orci. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <div>
          <h3>John Doe</h3>
          <span>River Side Apartments</span>
        </div>
      </div>
      <p>Sed vel lorem et velit dictum rhoncus eget sed orci. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <div>
          <h3>John Doe</h3>
          <span>River Side Apartments</span>
        </div>
      </div>
      <p>Sed vel lorem et velit dictum rhoncus eget sed orci. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </div>
  </li>
</ul>
    </div>
   </div>
  )
}

export default Testimonial
