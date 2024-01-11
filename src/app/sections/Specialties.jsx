import { specialties } from "@app/constants/data";
import Image from "next/image";
import specialties1 from "public/assets/specialties1.png";
import specialties2 from "public/assets/specialties2.png";
import specialties3 from "public/assets/specialties3.png";
import specialtiesbg from "public/assets/specialtiesbg.png";
const Specialties = () => {
  return (
    <main className="pt-24">
      <h2 className="text-yellow text-3xl xs:text-4xl sm:text-[40px]  md:text-5xl xl:text-6xl 2xl:text-[65px] font-display leading-normal mb-8 xs:mb-12 sm:mb-16 lg:mb-12 text-center">
        Our Specialities
      </h2>
      <p className="max-sm:px-6 text-white font-sans xs:text-lg sm:text-2xl md:text-3xl xl:text-[40px]  2xl:text-[45px] text-center">
        Authentic meals from our restaurant served with high <span className="sm:block mt-2 md:mt-4"> quality ingredients.</span>
      </p>

      <div className="lg:mt-24 flex justify-center max-md:hidden md:space-x-4 lg:space-x-10 xl:space-x-16">
        {specialties.map((items) => (
          <a href="#" className="border-accentRed border hover:bg-accentRed first:bg-accentRed first:text-white rounded-md px-3 lg:px-5 py-2 group transition-colors hover:scale-105" key={items.id}>
            <button type="button" className="text-[#D9D9D9] font-medium outline-none border-none">
              {items.name}
            </button>
          </a>
        ))}
        </div>
        
      <section className="relative w-full h-full mt-14 xs:mt-16 space-y-6 xs:space-y-10 sm:mt-24 sm:space-y-16  lg:pt-36 md:space-y-20 lg:space-y-32">
        <div className="absolute  top-0 w-full h-full inset-0">
          <Image src={specialtiesbg} alt="bg" className="w-full h-full xl:h-full" />
        </div>

        <div className="flex justify-between gap-x-8 xs:gap-x-12 sm:gap-x-16 md:gap-x-24 xl:gap-x-0 relative  px-4  sm:px-16 items-center max-xs:mb-4 ">
          <div className="max-xl:flex-1 max-xs:w-[30vw]">
            <Image src={specialties1} quality={100} placeholder="blur" className=" xl:w-[588px]" />
          </div>

          <div className="xs:space-y-1 space-y-3 md:space-y-5 max-xl:flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] text-white font-sans leading-normal text-center ">Dragon Sushi</h2>
            <p className="w-[40vw] md:w-[30vw] lg:w-[300px] xl:w-[462px] text-white font-sans text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal ">
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.
            </p>
            <p className="font-cinzel text-yellow xs:text-2xl sm:text-3xl font-bold ">$50</p>
          </div>
        </div>
        <div className="flex justify-between flex-row-reverse gap-x-8 xs:gap-x-12 sm:gap-x-16 md:gap-x-24 xl:gap-x-0 relative  px-4  sm:px-16 items-center">
          <div className="max-xl:flex-1 max-xs:w-[30vw]">
            <Image src={specialties2} quality={100} placeholder="blur" className=" xl:w-[588px]" />
          </div>

          <div className="xs:space-y-1 space-y-3 md:space-y-5 max-xl:flex-1">
            <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] text-white font-sans leading-normal text-center ">Creamy Sushi</h2>
            <p className="w-[40vw] md:w-[30vw] lg:w-[300px] xl:w-[462px] text-white font-sans text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal ">
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.
            </p>
            <p className="font-cinzel text-yellow xs:text-2xl sm:text-3xl font-bold ">$50</p>
          </div>
        </div>

        <div className="flex justify-between gap-x-8 xs:gap-x-12 sm:gap-x-16 md:gap-x-24 xl:gap-x-0 relative  px-4  sm:px-16 items-center">
          <div className="max-xl:flex-1 max-xs:w-[30vw]">
            <Image src={specialties3} quality={100} placeholder="blur" className=" xl:w-[588px]" />
          </div>

          <div className="xs:space-y-1 space-y-3 md:space-y-5 max-xl:flex-1">
            <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] text-white font-sans leading-normal text-center ">Roll Salmon Sushi</h2>
            <p className="w-[40vw] md:w-[30vw] lg:w-[300px] xl:w-[462px] text-white font-sans text-xs xs:text-base lg:text-lg xl:text-xl 2xl:text-[28px] leading-normal ">
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.
            </p>
            <p className="font-cinzel text-yellow xs:text-2xl sm:text-3xl font-bold ">$50</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Specialties;
