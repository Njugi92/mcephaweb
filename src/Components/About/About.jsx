import React from "react";
import "./About.css";
import about_img from "../../assets/about1.jpg";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>ABOUT Mcepha & ASSOCIATES Certified Public Accountants</h2>
        <h3>Nurturing Tomorrow's Success Today</h3>
        <p>
          A professional in financial management and accounting with over 13
          years post qualification experience. I have wide range of experience
          in financial management including preparing and analysing all
          financial reports and statements, developing and monitoring execution
          of company’s budget, preparing periodic financial reports and
          submitting to the Board for reviews and consideration. I also have
          experience in internal audit, risk management, design and
          implementation of financial management systems and internal controls
          with wide range of experience in Grants Management. I help businesses
          with a bias to SMEs to formulate tax and regulatory strategies and
          effectively manage tax and regulatory compliance related requirements.
        </p>
        <p>
          With a focus in innovation, hands-on learning, and personalized
          mentorship our programs prepare inspiring educators to make a
          meaningful impact in classrooms, schools and community.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor or
          educational Leader , Our diverse range of programs offers the perfect
          pathway to archive your goals and unlock your potential in shapping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
