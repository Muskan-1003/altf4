import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../../../assets/download2.avif";
import img2 from "../../../../assets/download2.avif";
import img3 from "../../../../assets/burger.png";
import img4 from "../../../../assets/download2.jpeg";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Swipe() {
  return (
    <>
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
          <div className=" bg-black/5">
            <img
              src={img1}
             
              className="object-fill  aspect-square	 overflow-hidden"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>  <img
              src={img2}
             
              className="object-fill aspect-square	 overflow-hidden"
            />
         </SwiperSlide>
        <SwiperSlide>  <img
              src={img3}
            
              className="object-fill  aspect-square	 overflow-hidden"
            />
          </SwiperSlide>
        <SwiperSlide>  <img
              src={img4}
             
              className="object-fill  aspect-square	 overflow-hidden"
            />
            </SwiperSlide>
      </Swiper>
    </>
  );
}
