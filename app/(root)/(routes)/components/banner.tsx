import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import HeroHome from "@/assets/hero-home.webp";

export const Banner = () => {
  return (
    <section className="container mt-3">
      <div className="overflow-hidden dark:shadow-inner shadow-2xl rounded-3xl relative bg-hero-pattern bg-cover">
        <div className="max-w-7xl px-8 mx-auto py-8 md:py-24 lg:py-32 md:flex items-center gap-8 text-center md:text-left space-y-4">
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
              Welcome
            </p>
            <h1 className="scroll-m-20 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mt-4">
              Let’s make your product a{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#149fc9] relative inline-block before:rounded-t-full before:rounded-r-full px-2">
                <span className="relative text-white">success</span>
              </span>
            </h1>
            <p className="text-xl [&:not(:first-child)]:mt-4 font-medium">
              Crator is your partner in digital innovation. We fuse strategic
              thinking with standout design and development to deliver uniquely
              tailored solutions.
            </p>
            <div className="flex items-center flex-wrap space-x-4 w-full justify-center md:justify-start">
              <Link
                className="w-full max-w-[200px] flex justify-center text-base font-medium transition ease-in-out bg-primary duration-300 rounded-full py-4 px-8 text-[#fff] hover:bg-transparent hover:outline hover:outline-2 hover:outline-primary hover:text-primary"
                href="/contact"
              >
                Let’s get started
              </Link>
              <Link
                className="w-fit max-w-md group relative text-base font-medium transition ease-in-out duration-300 rounded-full py-4 px-2 text-primary hover:text-primary"
                href="/services"
              >
                <span className="bg-gradient-to-b from-[#80a316] to-[#109fcf] p-7 absolute rounded-full inset-y-2/4 -translate-y-1/2 left-0 hidden"></span>
                <span className="z-10 relative">Learn more</span>
                <svg className="absolute" width="100" viewBox="10 0 115 30">
                  <path
                    className="group-hover:stroke-dashoffset-0 stroke-dasharray-100 md:stroke-dashoffset-100 transition-stroke-dash"
                    d="m2.5 66.25 9.75-3.75c3-1 6.5-.75 9.25.5l5.75 3.5c3 1.75 7 2 10.25.25l7-3.75c3-1.5 7-1.5 10 0l5.75 3.25c3 1.75 6.75 1.75 10 .25l8.5-4.25c2.75-1.5 6.25-1.25 9.25 0l6.75 3.5"
                    fill="none"
                    stroke="#139fcb"
                    strokeWidth="5.5"
                    transform="translate(8.83854 -49.878)"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2  z-20">
            <Image
              className="rounded-3xl dark:shadow-sm shadow-xl"
              src={HeroHome}
              alt="hero banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
