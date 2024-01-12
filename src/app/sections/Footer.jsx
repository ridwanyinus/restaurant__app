"use client";
import { useRef } from "react";
import { useIsVisible } from "@app/Components/useIsVisible";
import location from "public/assets/location.svg";
import call from "public/assets/call.svg";
import Image from "next/image";
const Footer = () => {
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  return (
    <footer
      id="footer"
      ref={ref6}
      className={`bg-[url(/assets/footer.png)] w-auto h-full pt-12 sm:pt-28 pb-24 relative object-cover bg-cover transition-opacity ease-in duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-white text-[22px] xs:text-3xl sm:text-4xl md:text-[40px]  lg:text-5xl font-display leading-normal mb-5  lg:mb-8 text-center z-10 relative ">
        We are always ready to surprise <span className="block sm:mt-2">you with new flavours</span>
      </h2>
      <div className="z-10 relative px-4 xs:pl-12 sm:pl-24 pt-12 space-y-4 md:space-y-8">
        <p className="flex items-center text-white font-sans font-medium text-lg sm:text-xl">
          <span className="mr-1">
            <Image src={location} alt="location" className="w-[25px] xs:w-[30px] " />
          </span>
          Flavo, (Copenhagen, Denmark)
        </p>
        <p className="flex items-center text-white font-sans font-medium text-lg sm:text-xl tracking-wide underline">
          <span className="mr-1">
            <Image src={call} alt="call" className="w-[25px] xs:w-[30px] " />
          </span>
          +(234)8166319747
        </p>
      </div>
    </footer>
  );
};

export default Footer;
