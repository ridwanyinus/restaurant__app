"use client";
import { useIsVisible } from "@app/Components/useIsVisble";
import { useRef } from "react";
const Hero = () => {
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  return (
    <main
      ref={ref4}
      id="hero"
      className={`bg-[url(/assets/herobg.png)] w-full bg-no-repeat bg-center bg-cover relative h-[90vh] xs:h-full pt-44 pb-16 xs:py-28  transition-opacity
  ease-in
  duration-700
  ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
      <div className="relative z-10 flex flex-col justify-center items-center">
        <h2 className="taste text-yellow font-display text-center leading-none text-3xl xs:text-4xl sm:text-[40px] md:text-5xl xl:text-6xl  widescreen:text-[65px] pb-12 lg:pb-12 w-full ">
          Taste the rich flavour of <span className="max-lg:block mt-2 xs:mt-1 sm:mt-2 "> high quality meals</span>
        </h2>
        <p className="text-white font-sans text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[45px] pb-12 lg:pb-12 w-[85vw] xs:w-[72vw] sm:w-[65vw] lg:w-[62vw] leading-normal xl:leading-[50px] font-normal text-center">
          We only use the five star quality for our menu, come and get the richness in every meals we serve.
        </p>

        <a href="#specialMenu" className="rounded-lg lg:rounded-[18px] border-[2px] border-gold px-3 sm:px-5 sm:py-3 py-2 hover:bg-black transition-colors ">
          <button type="button" className="outline-none border-none bg-transparent text-white font-sans text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
            Go to Menu
          </button>
        </a>
      </div>
    </main>
  );
};

export default Hero;
