import { Icons } from "@/components/icons";

export const OurPartners = () => {
  return (
    <section className="container mt-3">
      <div className="pt-8 md:pt-24 lg:pt-32">
        <div className="max-w-3xl w-full mx-auto text-center space-y-4">
          <p className="py-2 px-4 bg-gradient-to-r from-[#80a316] to-[#109fcf] inline-block rounded-t-full rounded-r-full text-sm font-medium text-white">
            Our partners
          </p>
          <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
            Trusted by the best companies in the business
          </h2>
          <p className="text-xl font-medium">
            Collaborating with various sectors, we’ve helped startups and
            established businesses alike to flourish.
          </p>
        </div>
        <div className="max-w-5xl w-full mx-auto mt-10 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.shopify className="h-6 lg:h-10 w-full fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.klaviyo className="h-6 lg:h-10 fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.meta className="h-6 lg:h-10 w-full fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.google className="h-6 lg:h-10 w-full fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.instagram className="h-6 lg:h-10 w-full fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
            <div>
              <div className="px-5 py-10 lg:py-14 rounded-3xl bg-accent/50">
                <Icons.pinterest className="scale-150 h-6 lg:h-10 w-full fill-black dark:fill-slate-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
