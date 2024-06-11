import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import banner_1 from "../Assets/banner1.png";
import banner_2 from "../Assets/banner2.png";
import banner_3 from "../Assets/banner3.png";
import banner_4 from "../Assets/banner4.png";
import banner_5 from "../Assets/banner5.png";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
