"use client";
import { specialData } from "@app/constants/data";
import arrow1 from "public/assets/arrow1.png";
import arrow2 from "public/assets/arrow2.png";
import Image from "next/image";
const SpecialMenu = () => {
  return (
    <main id="specialMenu" className="py-12 relative w-full h-full">
      {/* <Image src={arrow1} alt="arrow1" color="#fff" width={300} className="absolute " /> */}
      <div className="text-center">
        <h2 className="text-yellow ">Today's Special</h2>
        <p className="text-white ">Special menu oftenly comes different everyday, this is our special food for today</p>
      </div>
    </main>
  );
};

export default SpecialMenu;
