import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

import Partners from "./Components/Partners/Partners";
import Slider from "./Components/Slider/Slider";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="Our Services" title="What we offer" />
        <Slider />
        <Partners />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallerly" title="Our Staff Members" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Clients Says" />
        <Testimonial />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
