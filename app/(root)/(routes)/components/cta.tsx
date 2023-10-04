import Link from "next/link";

export const Cta = () => {
  return (
    <section className="relative dark:bg-[#1a1716] bg-[#fafaf9] mb-20 lg:mb-36 rounded-b-3xl rounded-bl-3xl">
      <div className="-bottom-6 absolute left-0 right-0 mx-auto w-0 h-0 border-t-[25px] dark:border-t-[#1a1716] border-t-[#fafaf9] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent"></div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="py-16 lg:py-24 px-6 sm:px-20">
          <div className="md:flex md:justify-between justify-center items-center space-y-8 md:space-y-0 text-center md:text-left">
            <div className="md:w-2/4">
              <h2 className="scroll-m-20 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
                Let’s make something great together.
              </h2>
            </div>
            <div className="md:w-2/4 shrink">
              <Link
                className="mx-auto md:mx-0 md:ml-auto w-full max-w-[200px] flex justify-center text-base font-medium transition ease-in-out bg-primary duration-300 rounded-full py-4 px-8 text-[#fff] hover:bg-transparent hover:outline hover:outline-2 hover:outline-primary hover:text-primary"
                href="/contact"
              >
                Let’s get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
