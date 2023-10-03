"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icons } from "@/components/icons";
import Logo from "@/assets/chemicah-logo.png";

export default function Navbar() {
  const [isToggleSidebarOpen, setIsToggleSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <div className="flex flex-wrap items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <Image
            className="order-1 max-w-[140px] md:max-w-[180px] w-full"
            src={Logo}
            alt="Chemicah logo"
          />
          <MainNav
            className={`shadow-lg lg:shadow-none flex-col-reverse items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 dark:from-[#080706] dark:to-[#080706] lg:from-transparent lg:to-transparent lg:dark:from-transparent lg:dark:to-transparent h-full left-0 lg:!bg-transparent py-6 lg:py-0 top-0 fixed lg:pt-0 order-3 lg:order-2 basis-full max-w-full lg:basis-0 lg:relative z-50 duration-300 transition-transform w-60 lg:w-full overflow-y-auto lg:translate-x-0 ${
              isToggleSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:-translate-x-0"
            }`}
          />
          <div className="flex items-center space-x-2 md:space-x-4 order-2 lg:order-3">
            <Link
              className="group right-6 w-12 h-12 sm:w-auto sm:h-auto bottom-10 sm:bottom-0 fixed z-10 flex items-center justify-center sm:relative text-base font-bold transition ease-in-out bg-primary duration-300 rounded-full py-3 sm:px-6 lg:px-8 text-[#fff] sm:hover:bg-transparent sm:hover:outline sm:hover:outline-2 sm:hover:outline-primary sm:hover:text-primary"
              href="/contact"
            >
              <span className="hidden sm:block">Let’s connect</span>
              <Icons.messageSquare className=" visible sm:hidden h-6 lg:h-10 w-full mx-auto stroke-white" />
              <span className="hidden w-full h-full group-hover:inline-flex sm:group-hover:!hidden group-hover:animate-ping absolute  rounded-full bg-sky-400 opacity-75"></span>
            </Link>
            <ThemeToggle />
            <Button
              className={`bg-gradient-to-b from-[#80a316] to-[#109fcf] rounded-2xl px-5 focus:outline-none relative block h-10 w-[1.8rem] self-center lg:hidden z-50
              
              `}
              onClick={() => setIsToggleSidebarOpen(!isToggleSidebarOpen)}
              aria-expanded={isToggleSidebarOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${
                    isToggleSidebarOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-4 text-white bg-current   transform transition duration-500 ease-in-out ${
                    isToggleSidebarOpen ? "opacity-0" : null
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 text-white bg-current transform  transition duration-500 ease-in-out ${
                    isToggleSidebarOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>
      </header>
      {isToggleSidebarOpen ? (
        <Backdrop setIsToggleSidebarOpen={setIsToggleSidebarOpen} />
      ) : null}
    </>
  );
}

function Backdrop({ setIsToggleSidebarOpen }: any) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-25 z-10 block lg:hidden"
      onClick={() => {
        setIsToggleSidebarOpen(false);
      }}
    ></div>
  );
}
