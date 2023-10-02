import Image from "next/image";
import { Icons } from "@/components/icons";
import HeroHome from "@/assets/hero-home.webp";

export const WhatWeDo = () => {
  return (
    <section className="dark:bg-[#1a1716] bg-[#fafaf9]">
      <div className="container">
        <div className="max-w-screen-xl w-full mx-auto">
          <div className="py-8 md:py-24 space-y-10 text-center md:text-left">
            <div className="space-y-4">
              <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
                What we do
              </p>
              <div className="grid lg:grid-cols-5 space-y-4">
                <div className="lg:col-span-3">
                  <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
                    We create digital products that help you get ahead
                  </h2>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-xl font-medium">
                    From fresh ideas to fully-realized designs, we cover every
                    aspect of your digital presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 space-y-8 md:space-y-0">
              <div className="space-y-4 md:space-y-8">
                <div>
                  <div className="px-10 py-8 rounded-3xl bg-accent/50 shadow-xl space-y-2 space-x-6 max-w-lg mx-auto md:flex">
                    <div className="w-1/5 mx-auto md:mx-0">
                      <div className="w-12 h-12 flex items-center justify-center bg-accent/50 p-2 rounded-2xl border mx-auto md:mx-0">
                        <Icons.laso className="h-6 lg:h-10 mx-auto" />
                      </div>
                    </div>
                    <div>
                      <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
                        Web Design
                      </h4>
                      <p className="text-base">
                        We craft visually stunning, unforgettable experiences
                        with responsive design at the forefront.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-10 py-8 rounded-3xl bg-accent/50 shadow-xl space-y-2 space-x-6 max-w-lg mx-auto md:flex">
                    <div className="w-1/5 mx-auto md:mx-0">
                      <div className="w-12 h-12 flex items-center justify-center bg-accent/50 p-2 rounded-2xl border mx-auto md:mx-0">
                        <Icons.layout className="h-6 lg:h-10 mx-auto" />
                      </div>
                    </div>
                    <div>
                      <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
                        Web Development
                      </h4>
                      <p className="text-base">
                        We excell at converting eye-catching designs into
                        high-functioning, user-friendly web applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-10 py-8 rounded-3xl bg-accent/50 shadow-xl space-y-2 space-x-6 max-w-lg mx-auto md:flex">
                    <div className="w-1/5 mx-auto md:mx-0">
                      <div className="w-12 h-12 flex items-center justify-center bg-accent/50 p-2 rounded-2xl border mx-auto md:mx-0">
                        <Icons.gauge className="h-6 lg:h-10 mx-auto" />
                      </div>
                    </div>
                    <div>
                      <h4 className="scroll-m-20 text-xl font-bold tracking-tight">
                        Maintenance & Optimization
                      </h4>
                      <p className="text-base">
                        We ensure your site remains an effective, optimized tool
                        for your business needs, goals and growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-2">
                  <Image
                    className="rounded-3xl dark:shadow-sm shadow-xl h-full w-full object-cover"
                    src={HeroHome}
                    alt="hero banner"
                  />
                </div>
                <div className="row-span-1 col-span-1">
                  <Image
                    className="rounded-3xl dark:shadow-sm shadow-xl h-full w-full object-cover"
                    src={HeroHome}
                    alt="hero banner"
                  />
                </div>
                <div className="row-span-1 col-span-1">
                  <Image
                    className="rounded-3xl dark:shadow-sm shadow-xl h-full w-full object-cover"
                    src={HeroHome}
                    alt="hero banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
