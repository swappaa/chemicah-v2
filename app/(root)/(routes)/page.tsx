import Separator from "@/components/separator";
import { Banner } from "./components/banner";
import { OurPartners } from "./components/our-partners";
import { OurProcess } from "./components/our-process";
import { OurWork } from "./components/our-work";
import { Testimonial } from "./components/testimonial";
import { WhatWeDo } from "./components/what-we-do";

export default function HomePage() {
  return (
    <>
      <Banner />
      <OurPartners />
      <Separator className="h-16 lg:h-48" />
      <WhatWeDo />
      <Separator className="h-16 lg:h-48 -scale-x-100 transform -scale-y-100" />
      <OurProcess />
      <OurWork />
      <Testimonial />
    </>
  );
}
