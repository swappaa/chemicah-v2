import Image from "next/image";
import { Icons } from "@/components/icons";
import HeroHome from "@/assets/hero-home.webp";

export const OurProcess = () => {
  return (
    <section className="container mt-3">
      <div className="py-8 md:py-24">
        <div className="max-w-3xl w-full mx-auto text-center space-y-4">
          <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
            Our process
          </p>
          <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
            Experience our simple design process
          </h2>
          <p className="text-xl font-medium">
            Uncover the essence of your brand, through our highly collaborative
            and intuitively structured design process.
          </p>
        </div>
        <div className="max-w-screen-xl w-full mx-auto mt-10 md:mt-16">
          <div className="grid lg:grid-cols-3 gap-4 lg:space-x-10 md:gap-6 text-center">
            <div className="lg:space-y-6 md:flex lg:block order-2 lg:order-1">
              <div>
                <div className="p-5 rounded-3xl space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#80a316] to-[#109fcf] p-2 rounded-2xl mx-auto">
                    <Icons.lightbulb className="h-6 lg:h-10 mx-auto stroke-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="scroll-m-20 text-2xl font-bold tracking-tight">
                      1. Collect Ideas
                    </h4>
                    <p className="text-xl">
                      We gather comprehensive insights about your product to
                      fully understand your unique needs and vision.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-5 rounded-3xl space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#80a316] to-[#109fcf] p-2 rounded-2xl mx-auto">
                    <Icons.laso className="h-6 lg:h-10 mx-auto stroke-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="scroll-m-20 text-2xl font-bold tracking-tight">
                      2. Design Concept
                    </h4>
                    <p className="text-xl">
                      We creatively dHctdHJhbnNmb3Jt your vision and ideas into
                      design drafts. We iterate until you are satisfied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                className="rounded-3xl dark:shadow-sm shadow-xl h-full w-full object-cover"
                src={HeroHome}
                alt="hero banner"
              />
            </div>
            <div className="lg:space-y-6 md:flex lg:block order-3">
              <div>
                <div className="p-5 rounded-3xl space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#80a316] to-[#109fcf] p-2 rounded-2xl mx-auto">
                    <Icons.list className="h-6 lg:h-10 mx-auto stroke-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="scroll-m-20 text-2xl font-bold tracking-tight">
                      3. Check
                    </h4>
                    <p className="text-xl">
                      We craft visually stunning, unforgettable experiences with
                      responsive design at the forefront.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-5 rounded-3xl space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-[#80a316] to-[#109fcf] p-2 rounded-2xl mx-auto">
                    <Icons.rocket className="h-6 lg:h-10 mx-auto stroke-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="scroll-m-20 text-2xl font-bold tracking-tight">
                      4. Finalize Product
                    </h4>
                    <p className="text-xl">
                      Upon your approval, we finalize and refine the design and
                      launch your uniquely tailored product to the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
