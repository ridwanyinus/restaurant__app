"use client";
import { specialData } from "@app/constants/data";
import arrow1 from "public/assets/arrow1.png";
import arrow2 from "public/assets/Vector.png";
import specialbg from "public/assets/specialbg.png";
import Image from "next/image";
const SpecialMenu = () => {
  return (
    <main id="specialMenu" className="pt-24 relative w-full h-full mx-auto">
      <Image src={arrow1} alt="arrow1" color="#fff" width={300} className="absolute max-lg:hidden left-10 lg:top-16 xl:top-28" />
      <Image src={arrow2} alt="arrow1" color="#fff" width={300} className="absolute  max-xl:hidden  lg:-top-1 xl:top-5 lg:-right-3 xl:right-7" />

      <div className="text-center mb-20 lg:mb-24 xl:mb-44">
        <h2 className="text-yellow text-3xl xs:text-4xl sm:text-[40px]  md:text-5xl xl:text-6xl 2xl:text-[65px] font-display leading-normal mb-8 xs:mb-12 sm:mb-16 lg:mb-12 ">Today's Special</h2>
        <p className="max-sm:px-6 text-white font-sans xs:text-xl sm:text-2xl md:text-3xl xl:text-[40px]  2xl:text-[45px] ">
          Special menu oftenly comes different everyday,<span className="sm:block mt-2 md:mt-4"> this is our special food for today</span>
        </p>
      </div>

      <section className="lg:pt-24 w-full h-full flex">
        <div className="max-lg:grid xs:grid-cols-2   flex xs:w-[90%] sm:w-[85%] lg:w-full justify-center items-start md:px-6 lg:px-12 h-full md:gap-x-8 lg:space-x-3 max-lg:gap-y-16 mx-auto">
          {specialData.map((items) => (
            <div className="lg:flex-1  xl:py-8 max-xs:pl-8" key={items.id}>
              <a href="#" className=" w-[50vw] xs:w-[35vw] sm:w-[35vw]  lg:w-[200px] xl:w-[250px] xl:h-[200px] block  group rounded-lg">
                <Image src={items.imgurl} alt={items.name} quality={100} placeholder="blur" className=" w-full lg:w-auto h-auto group-hover:brightness-125 transition-all " />
              </a>

              <h3 className="text-white xs:text-base md:text-lg lg:text-xl font-sans  font-medium py-5 h-fit leading-none">{items.name}</h3>
              <p className="text-white text-[15px] font-sans w-[80%] xs:w-[88%] sm:w-[85%] lg:w-[90%] ">{items.label}</p>

              <div className="inline-flex justify-start items-start mt-5 space-x-2">
                {items.rating.map((rates) => (
                  <a href="#" className="inline-flex ">
                    <Image src={rates.star} className="w-[20px] lg:w-[25px] widescreen:w-[30px]" />
                  </a>
                ))}
              </div>
              <a href="#" className="bg-gold block mt-3 text-center w-[50%] md:w-[70%] rounded-lg py-1 hover:bg-slate-500 group">
                <button type="button" className="text-black font-inter  font-medium group-hover:text-white text-[13px] sm:text-base">
                  Order Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-24">
        <Image src={specialbg} />
      </div>
    </main>
  );
};

export default SpecialMenu;
