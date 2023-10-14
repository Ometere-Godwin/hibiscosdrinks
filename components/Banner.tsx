"use client";

import React from "react";
import slider1 from "../public/assets/slider1.jpeg";
import slider2 from "../public/assets/slider2.jpeg";
import slider4 from "../public/assets/slider4.jpeg";
import slider3 from "../public/assets/slider3.jpeg";
import slider5 from "../public/assets/slider5.jpeg";
import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
//import BannerText from "./BannerText";

export default function Banner() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      // Left Arrow
      <div
        onClick={onClick}
        className="p-3 bg-slate-100 rounded-full
            hover:text-orange-600 hover:bg-white 
            cursor-pointer duration-200 text-2xl 
            flex items-center justify-center z-20 absolute left-5 top-1/2">
        <PiCaretLeftLight />
      </div>
    );
  };

  // Right Arrow
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
      onClick={onClick}
      className="p-3 bg-slate-100 rounded-full
      hover:text-orange-600 hover:bg-white 
      cursor-pointer duration-200 text-2xl 
      flex items-center justify-center z-20 absolute right-5 top-1/2">
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="  w-full h-full relative">
          <Image
            src={slider2}
            alt="young"
            className=" w-full object-contain"
            priority
          />
          {/* <BannerText text="Special Offer" /> */}
        </div>

        {/* Second Slide */}
        <div className="  w-full h-full relative">
          <Image
            src={slider3}
            alt="young"
            className="w-full object-contain"
          />
          {/* <BannerText text="Seasonal Offers" /> */}
        </div>

        {/* Third Slide */}
        <div className="  w-full h-full relative">
          <Image
            src={slider4}
            alt="young"
            className=" w-full object-contain"
          />
          {/* <BannerText text="Picked for men" /> */}
        </div>

        {/* Fourth Slide */}
        <div className="  w-full h-full relative">
          <Image
            src={slider5}
            alt="young"
            className=" w-full object-contain"
          />
          {/* <BannerText text="Picked for men" /> */}
        </div>
      </Slider>
      {/* <div className="bannerGradient"/> */}
    </div>
  );
}
