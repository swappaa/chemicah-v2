"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

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
        <Marquee gradient={true} pauseOnHover={true} className="space-x-4">
          <div className="flex items-center justify-center space-x-4 h-40 md:h-56 lg:h-70 2xl:h-96">
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
            <Image
              className="rounded-3xl h-full w-full object-cover"
              src={HeroHome}
              alt="hero banner"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};
