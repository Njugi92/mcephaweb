import React from "react";
import "./Partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo1 from "../../assets/icpak3.png";
import Logo2 from "../../assets/ifsr3.png";
import Logo3 from "../../assets/iia3.png";
import Logo4 from "../../assets/kra3.jpg";
import "swiper/css";

const Partners = () => {
  return (
    <div className="partners">
      {/* heading */}
      <span>We Partner with Major Companies</span>
      <span>Partners</span>

      {/* slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        grabCursor={true}
        className="partners-slider"
      >
        <SwiperSlide>
          <img src={Logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
