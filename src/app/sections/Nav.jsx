"use client";
import { useState } from "react";
import { navLinks } from "@app/constants/data";
import Image from "next/image";
import logo from "public/assets/logo.svg";

const Nav = () => {
  return (
    <nav className="*:text-white *:font-inter relative flex justify-end  bg-grey py-5 px-16 items-center">
      <div className="absolute left-10 top-0">
        <Image src={logo} alt="logo" width={95} />
      </div>

      <div className="flex gap-x-12  mx-auto">
        {navLinks.map((items) => (
          <ul key={items.id}>
            <li className="gap-x-7 flex">
              <a href={items.link} className="text-lg hover:text-gold hover:font-medium hover:border-b border-accentRed transition-all">
                {items.name}
              </a>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex">
        <a href="#" className="bg-accentRed py-1 px-3 rounded nav backdrop-blur-[2px] group hover:scale-105 hover:bg-yellow transition-all">
          <button type="button" className="text-base group-hover:text-black group-hover:font-medium">
            Sign In
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
