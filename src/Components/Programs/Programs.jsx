import React from "react";
import "./Programs.css";
import HeartEmoji from "../../assets/heartemoji.png";
import Glasses from "../../assets/glasses.png";
import Humble from "../../assets/humble.png";
import Card from "../Card/Card";
import News from "./Njugi_Karuma_-_Software_Developer-2.pdf";

const Programs = () => {
  return (
    <div className="services">
      {/* left side*/}
      <div className="awesome">
        <span>Mcepha & ASSOCIATES</span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          esse, <br />
          harum doloribus rerum qui ducimus?
        </span>
        <a href={News} download>
          <button className="button s-button">Download News </button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side*/}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Accountancy"}
            detail={"Figma, Sketch, Adobe, Adobe xd"}
          />
        </div>
        {/* second card */}

        <div style={{ top: "12rem", left: "-6rem" }}>
          <Card
            emoji={Glasses}
            heading={"Tax"}
            detail={"File indivindual tax, File company tax, Adobe, Adobe xd"}
          />
        </div>
        {/* 3rd card */}

        <div style={{ top: "20rem", left: "14rem" }}>
          <Card
            emoji={Humble}
            heading={"Business Advisory"}
            detail={"File indivindual tax, File company tax, Adobe, Adobe xd"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Programs;
