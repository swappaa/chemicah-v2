"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import {
  FreeMode,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import HeroHome from "@/assets/hero-home.webp";

export const OurWork = () => {
  return (
    <section>
      <div className="py-8 md:py-24 space-y-10 text-center md:text-left">
        <div className="max-w-3xl w-full mx-auto text-center space-y-4">
          <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
            Recent Work
          </p>
          <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
            Check out some of our recent & current work
          </h2>
        </div>
        <Swiper
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          effect={"coverflow"}
          freeMode={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={true}
          modules={[FreeMode, Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper !py-4 md:!py-8 !mt-3"
        >
          <SwiperSlide>
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
              <span className="relative text-white">Venti</span>
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
              <span className="relative text-white">Venti</span>
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
              <span className="relative text-white">Venti</span>
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
              <span className="relative text-white">Venti</span>
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
