import location from "public/assets/location.svg";
import call from "public/assets/call.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer id="footer" className={`bg-[url(/assets/footer.png)] w-auto h-full pt-12 sm:pt-28 pb-24 relative object-cover bg-cover `}>
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
