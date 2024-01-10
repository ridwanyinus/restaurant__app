"use client";
import { specialData } from "@app/constants/data";
import arrow1 from "public/assets/arrow1.png";
// import arrow2 from "public/assets/arrow2.png";
import arrow2 from "public/assets/Vector.png";
import Image from "next/image";
const SpecialMenu = () => {
  return (
    <main id="specialMenu" className="max-lg:py-24 py-16 relative w-full h-full">
      <Image src={arrow1} alt="arrow1" color="#fff" width={300} className="absolute max-lg:hidden left-10 lg:top-16 xl:top-28" />
      <Image src={arrow2} alt="arrow1" color="#fff" width={300} className="absolute  max-lg:hidden  lg:-top-1 xl:top-5 lg:-right-5 xl:right-7" />

      <div className="text-center mb-44">
        <h2 className="text-yellow text-3xl xs:text-4xl sm:text-[40px]  md:text-5xl xl:text-6xl 2xl:text-[65px] font-display leading-normal mb-8 xs:mb-12 sm:mb-16 lg:mb-12 ">
          Today's  Special
        </h2>
        <p className="max-sm:px-6 text-white font-sans xs:text-xl sm:text-2xl md:text-3xl xl:text-[40px]  2xl:text-[45px] ">
          Special menu oftenly comes different everyday,<span className="sm:block mt-2 md:mt-4"> this is our special food for today</span>
        </p>
      </div>
      <section className="pt-24">
        <div className="flex">
          {specialData.map((items) => (
            <div>
              <a href="#">
                <Image src={items.imgurl} alt={items.name} />
              </a>
              <h3>{items.name}</h3>
              <p>{items.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SpecialMenu;
