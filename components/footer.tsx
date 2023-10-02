"use client";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import Logo from "@/assets/chemicah-logo.png";

export default function Navbar() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-3 md:col-span-1 flex flex-col space-y-10">
            <Link href="/">
              <Image
                className="order-1 max-w-[140px] md:max-w-[180px] w-full"
                src={Logo}
                alt="Chemicah logo"
              />
            </Link>
            <span className="text-lg text-gray-500 dark:text-gray-400 hidden md:block">
              © 2023{" "}
              <Link href="/" className="hover:underline hover:text-primary">
                Chemicah™.
              </Link>
              <br />
              All Rights Reserved.
            </span>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Get in touch
            </h3>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-lg">
              <li className="mb-4">
                123 W. Kanye Street <br />
                Los Angeles, CA 90001
              </li>
              <li>
                (415) 555-1234
                <br />
                <a
                  href="mailto:chemicah@crator.com"
                  className="hover:underline hover:text-primary"
                >
                  chemicah@crator.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-lg space-y-2">
              <li>
                <Link href="/" className="hover:underline hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-3 md:col-span-1">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Follow us on social media
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400 text-lg font-medium">
              Stay connected and updated on our latest projects.
            </p>
            <ul className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <li>
                <Link
                  href="/"
                  className="group bg-accent/50 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-2xl border dark:hover:border-white/20 hover:border-black/50"
                >
                  <Icons.facebook className="dark:fill-slate-400 fill-black stroke-none group-hover:fill-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group bg-accent/50 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-2xl border dark:hover:border-white/20 hover:border-black/50"
                >
                  <Icons.linkedin className="dark:fill-slate-400 fill-black stroke-none group-hover:fill-primary" />
                </Link>
              </li>
            </ul>
            <span className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mt-6 block md:hidden text-center md:text-left">
              © 2023{" "}
              <Link href="/" className="hover:underline hover:text-primary">
                Chemicah™.{" "}
              </Link>
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
