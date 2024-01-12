"use client";
import { useRef } from "react";
import useIsVisible from "@app/Components/useIsVisible";
import dining1 from "public/assets/dining1.png";
import dining2 from "public/assets/dining2.png";
import dining3 from "public/assets/dining3.png";
import Image from "next/image";

const Dining = () => {
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  return (
    <section
      id="dining"
      ref={ref4}
      className={`pt-12 lg:pt-24 pb-12   transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}
    `}>
      <h2 className="text-yellow text-3xl xs:text-4xl sm:text-[40px]  md:text-5xl xl:text-6xl 2xl:text-[65px] font-display leading-normal mb-5  lg:mb-12 text-center">Dining Events</h2>
      <p className="max-sm:px-6 text-white font-sans xs:text-lg sm:text-2xl md:text-3xl xl:text-[40px]  2xl:text-[45px] text-center">
        We provide dining event for your special day <span className="sm:block mt-2 md:mt-4"> with your important people</span>
      </p>

      <div className="flex justify-center gap-x-8 mt-8 sm:mt-12">
        <a href="#" className="bg-accentRed  first:text-white rounded-md px-3 lg:px-5 py-2 group transition-colors hover:scale-105 ">
          <button type="button" className="text-[#D9D9D9] text-[13px]  xs:text-base font-medium outline-none border-none">
            Private Events
          </button>
        </a>
        <a href="#" className="border-accentRed border hover:bg-accentRed  first:text-white rounded-md px-3 lg:px-5 py-2 group transition-colors hover:scale-105">
          <button type="button" className="text-[#D9D9D9] font-medium text-[13px] xs:text-base outline-none border-none">
            Corporate Events
          </button>
        </a>
      </div>

      <main className="pt-12 xs:pt-16 lg:pt-24  sm:px-4 md:px-6 lg:px-12 w-full h-full space-y-12 xs:space-y-16  sm:space-y-24 lg:space-y-28 xl:space-y-32 ">
        <div className="xs:flex justify-end w-full max-sm:pl-3 pt-6">
          <div className="*:text-white xs:space-y-5 max-xs:mb-8">
            <p className="font-display text-2xl xs:text-4xl sm:text-[40px] md:text-5xl xl:text-6xl 2xl:text-[65px]">Fine Dining</p>
            <p className="text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal font-sans  xs:w-[85%] sm:w-[70%]">Bottle of Champagne Fine Sushi Tower For 2+ Dessert</p>
          </div>

          <div className="relative left-0 flex justify-end h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] linear">
            <Image src={dining1} alt="dining" quality={100} className="w-[100%] xs:w-[75%] sm:w-[80%] object-cover" />
            <p className="text-yellow font-display absolute bottom-0 left-[5%] z-10 text-2xl xs:text-3xl sm:text-4xl   md:text-4xl xl:text-6xl 2xl:text-[65px]">$500</p>
          </div>
        </div>

        <div className="max-xs:flex-col-reverse   flex w-full pl-3  xs:px-3 lg:px-0 md:space-x-3 lg:space-x-0 items-start pt-6">
          <div className="relative right-0 flex justify-start h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] linear2 ">
            <Image src={dining2} alt="dining" quality={100} className="w-[100%] xs:w-[100%]  object-cover" />
            <p className="text-yellow font-display absolute bottom-0 right-0 xs:-right-[15%] sm:-right-[10%]  md:-right-[5%] z-10 text-2xl xs:text-3xl sm:text-4xl   md:text-4xl xl:text-6xl 2xl:text-[65px]">
              $1000
            </p>
          </div>
          <div className="*:text-white xs:space-y-5 xs:flex flex-col justify-start items-end max-xs:mb-8">
            <p className="font-display text-2xl xs:text-4xl sm:text-[40px] md:text-5xl xl:text-6xl 2xl:text-[65px]">Gold Dining</p>
            <p className="text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal font-sans xs:w-[75%] lg:w-[60%] text-right">Bottle of Champagne Secret Menu Sushi For 2+ Dessert</p>
          </div>
        </div>

        <div className="xs:flex justify-end w-full max-sm:pl-3 pt-6 ">
          <div className="*:text-white xs:space-y-5">
            <p className="font-display text-2xl xs:text-4xl sm:text-[40px] md:text-5xl xl:text-6xl 2xl:text-[65px] w-full">Royal Dining</p>
            <p className="text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal font-sans xs:w-[85%] sm:w-[70%]">
              Bottle of Luxury Champagne Special Menu Sushi For 2+ Royal Dessert
            </p>
          </div>

          <div className="relative right-0 flex justify-end h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] linear mt-8">
            <Image src={dining3} alt="dining" quality={100} className="w-[100%] xs:w-[75%] sm:w-[80%] object-cover" />
            <p className="text-yellow font-display absolute bottom-0 left-[5%] z-10 text-2xl xs:text-3xl sm:text-4xl   md:text-4xl xl:text-6xl 2xl:text-[65px]">$500</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dining;
