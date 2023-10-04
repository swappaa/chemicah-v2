"use client";

import { useEffect, useState, useRef } from "react";
import { Icons } from "@/components/icons";

export const Testimonial = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = (): void => {
      if (isExpanded && gridRef.current) {
        const sectionTop = gridRef.current.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight / 2) {
          setButtonOpacity(1);
        } else {
          setButtonOpacity(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  return (
    <section>
      <div className="container">
        <div className="py-8 md:py-24">
          <div className="max-w-3xl w-full mx-auto text-center space-y-4">
            <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
              Testimonials
            </p>
            <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
              What they say about us
            </h2>
            <p className="text-xl font-medium">
              Discover first-hand accounts from our clients, who experienced the
              transformative power of our creative solutions.
            </p>
          </div>
          <div className="max-w-screen-xl w-full mx-auto mt-10 md:mt-16 relative">
            <div
              ref={gridRef}
              className={`grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 ${
                isExpanded ? "" : "max-h-[33rem] overflow-hidden"
              }`}
            >
              <ul className="space-y-8">
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        We excell at converting eye-catching designs into
                        high-functioning, user-friendly web applications.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Working with Crator was a game-changer. Their creative
                        vision truly amplified our brands potential.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Crators innovative design solutions played a key role in
                        our products successful launch.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              <ul className="space-y-8">
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        We excell at converting eye-catching designs into
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Working with Crator was a game-changer. Their creative
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Crators innovative design solutions played a key role in
                        our products successful launch.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              <ul className="space-y-8">
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        We excell at converting eye-catching designs into
                        high-functioning, user-friendly web applications. We
                        excell at converting eye-catching designs into
                        high-functioning, user-friendly web applications.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Working with Crator was a game-changer. Their creative
                        vision truly amplified our brands potential.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li className="text-sm leading-6">
                  <figure className="relative flex flex-col rounded-3xl bg-accent/50 shadow-xl p-8">
                    <Icons.quote className="absolute -top-4 left-10 h-10 w-10 lg:h-10 rotate-6" />
                    <blockquote className="text-slate-700 dark:text-slate-300">
                      <p className="text-base">
                        Crators innovative design solutions played a key role in
                        our products successful launch.
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4 mt-4">
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          Mannie Schumpert
                        </div>
                        <div className="mt-0.5">
                          Co-Founder/CTO @LaunchPathInc
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            <div
              style={{ opacity: buttonOpacity }}
              className={`btn-elem opacity-0 inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-[#0c0a09] ${
                isExpanded
                  ? "sticky -mt-52 transition-opacity duration-300 opacity-100"
                  : "opacity-100 absolute"
              }`}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                type="button"
                className={`relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-full flex items-center bg-primary hover:bg-primary/80 pointer-events-auto ${
                  isExpanded ? "" : "transition-transform translate-y-4"
                }`}
              >
                {isExpanded ? "Okay, I get the point" : "Show more..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
