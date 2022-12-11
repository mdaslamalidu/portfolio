import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectSection.css";

import  data  from "../assets/data/project";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const ProjectSection = () => {
  return (
    <section id="testimonials" className="main-testimonials-wrapper mt-24">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        <div>
          {data.map((item, key) => (
          <SwiperSlide>
            <img src={item.img} alt={item.name} />
            <h3 className="mt-5">{item.name}</h3>
            <p className="my-5">{item.desc}</p>
            {/* <a href="#">Live Site</a> */}
            <div className="swiperLInk">
              <a href="https://frolicking-gelato-5bd8e1.netlify.app/" target="_blank">Live Site</a>
            <a href="#">Client Code</a>
            <a href="#">Server Code</a>
            </div>
          </SwiperSlide>
        ))}
</div>
      </Swiper>

      <div className="quote-parent">
        <div className="quote n-box1 flex-with-center">
          <h1>Quote?!</h1>
          <div className="quote-content">
            <p>“ Knowledge is power.” </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;