import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/assets/chemicah-logo.png";

export default async function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between px-2 py-6 max-w-7xl mx-auto">
        <Image
          className="max-w-[180px] w-full"
          src={Logo}
          width={500}
          height={500}
          alt="Chemicah logo"
        />
        <MainNav />
        <div className="flex items-center space-x-4">
          <Link
            className="font-bold transition ease-in-out bg-primary duration-300 rounded-full py-3 px-8 text-[#fff] hover:bg-transparent hover:outline hover:outline-2 hover:outline-primary hover:text-primary"
            href="/contact"
          >
            Let's talk
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
