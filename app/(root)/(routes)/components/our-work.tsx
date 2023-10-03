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
        <div className="scale-[102%]">
          <Marquee
            gradient={true}
            pauseOnHover={true}
            className="space-x-4 overflow-hidden"
          >
            <div className="flex items-center justify-center space-x-4 h-40 md:h-56 lg:h-70 2xl:h-96">
              <div className="h-full">
                <Image
                  className="rounded-3xl h-full w-full object-cover"
                  src={HeroHome}
                  alt="hero banner"
                />
                <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
                  <span className="relative text-white">Venti</span>
                </span>
              </div>
              <div className="h-full">
                <Image
                  className="rounded-3xl h-full w-full object-cover"
                  src={HeroHome}
                  alt="hero banner"
                />
                <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
                  <span className="relative text-white">HabitualSkin</span>
                </span>
              </div>
              <div className="h-full">
                <Image
                  className="rounded-3xl h-full w-full object-cover"
                  src={HeroHome}
                  alt="hero banner"
                />
                <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
                  <span className="relative text-white">Rude Coffee</span>
                </span>
              </div>
              <div className="h-full">
                <Image
                  className="rounded-3xl h-full w-full object-cover"
                  src={HeroHome}
                  alt="hero banner"
                />
                <span className="bottom-12 left-2 md:left-6 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block px-3 before:rounded-t-full before:rounded-r-full">
                  <span className="relative text-white">Universal Father</span>
                </span>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
