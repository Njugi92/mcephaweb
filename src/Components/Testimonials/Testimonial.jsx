import React from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";
const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jane Doe</h3>
                  <span>British finance company</span>
                </div>
              </div>
              <p>
                Choosing to work with Mcepha & Associates on Filling tax our
                company....
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Dr. Nickson Mburu</h3>
                  <span>Kenya Farmers Seed Company</span>
                </div>
              </div>
              <p>
                Since we partnered with Mcepha & ASSOCIATES company we have
                developed our business by 70%per anual GDP
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mr. Philip Opiyo</h3>
                  <span>Jamii Telcom Limited</span>
                </div>
              </div>
              <p>
                Choosing to pursue was one of the best decisions I've ever made.
                The supportive community, the state-of-art facilities, and
                commitment to excellence has truely exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Boniface Karanja</h3>
                  <span>Law Business Farm, Nairobi</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at LKCC University was one of the
                best decisions I've ever made. The supportive community, the
                state-of-art facilities, and commitment to excellence has truely
                exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
