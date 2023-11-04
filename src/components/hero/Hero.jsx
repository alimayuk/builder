import React from "react";
import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import SlideItem from "../slideItem/SlideItem";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slideWrapper">
            <SlideItem
              title={"Builderry"}
              content={"Summer discounts for big construction projects!"}
              btnText={"MORE SPECIAL OFFERS"}
              btnLink={"d"}
            />
            <img
              src="https://images.pexels.com/photos/2449785/pexels-photo-2449785.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="slideWrapper">
            <SlideItem
              title={"Builderry"}
              content={
                "This year we’ve built more complex constructions than ever before…"
              }
              btnText={"SEE OUR RECENT PROJECTS"}
              btnLink={"d"}
            />
            <img
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="slideWrapper">
            <SlideItem
              title={"Builderry"}
              content={"See how a 10-story tower was built, in a time-lapse!"}
              btnText={"VIEW MORE OUR PROJECTS"}
              btnLink={"d"}
            />
            <img
              src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="slideWrapper">
            <SlideItem
              title={"Builderry"}
              content={
                "This year we’ve built more complex constructions than ever before…"
              }
              btnText={"VIEW MORE OUR PROJECTS"}
              btnLink={"d"}
            />
            <img
              src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
