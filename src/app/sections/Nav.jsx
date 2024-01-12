"use client";
import { useState } from "react";
import { navLinks } from "@app/constants/data";
import Image from "next/image";
import logo from "public/assets/logo.svg";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <nav className="max-lg:fixed *:text-white *:font-inter z-50 flex relative justify-end  bg-grey max-lg:h-[65px] py-5 lg:px-16 items-center w-full">
      <div className="absolute left-[20px] lg:left-10 top-0 max-sm:top-2 z-10">
        <Image src={logo} alt="logo" priority className="w-[60px] sm:w-[70px] xl:w-[95px] lg:w-[80px] cursor-pointer" />
      </div>

      <div className="flex gap-x-12 items-center mx-auto max-lg:hidden">
        {navLinks.map((items) => (
          <ul key={items.id}>
            <li className="gap-x-7 flex">
              <a href={items.link} className="text-base xl:text-lg hover:text-gold hover:font-medium hover:border-b border-accentRed transition-all">
                {items.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex items-center max-lg:hidden">
        <a href="#" className="bg-accentRed py-1 px-3 rounded nav backdrop-blur-[2px] group hover:scale-105 hover:bg-yellow transition-all">
          <button type="button" className="text-base group-hover:text-black group-hover:font-medium">
            Sign In
          </button>
        </a>
      </div>

      {/* Mobile Nav */}

      <section className="lg:hidden flex justify-center items-center z-50 ">
        {toggleMenu ? (
          <IoClose size={30} color="#FF9F0F" onClick={() => settoggleMenu(false)} className="absolute top-4 right-[10px]" />
        ) : (
          <AiOutlineAlignLeft size={28} color="#FF9F0F" onClick={() => settoggleMenu(true)} className="mr-[10px]" />
        )}

        {toggleMenu && (
          <div className="w-screen flex justify-start items-start h-full ">
            <div className="fixed w-[90%]  left-0 right-0 mx-auto bg-white top-[62px] *:text-black pt-1 pb-4 scale-up-ver-top transition-all">
              {navLinks.map((items) => (
                <ul key={items.id} className="">
                  <li className="flex border-b border-gray-50 px-4 py-1 last:mb-4">
                    <a href={items.link} className="text-[14px] hover:text-gold hover:border-b border-accentRed transition-all text-left leading-[24px] font-bold">
                      {items.name}
                    </a>
                  </li>
                </ul>
              ))}
              <a href="#" className="bg-accentRed py-[6px] px-5 rounded nav backdrop-blur-[2px] group hover:scale-105 hover:bg-yellow transition-all  mx-4 text-center">
                <button type="button" className="text-[14px] leading-[24px] font-bold group-hover:text-black border-none outline-none">
                  Sign In
                </button>
              </a>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Nav;
