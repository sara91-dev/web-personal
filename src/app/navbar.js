"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center mt-3 my-1.5 mb-20">
      <p className="hidden lg:block absolute left-0 ml-12 py-2">ao</p>
      <ul className="flex flex-nowrap justify-center p-4 sm:py-1.5 bg-white rounded-md xl:gap-x-30 lg:gap-x-24 md:gap-x-16 sm:gap-x-12 gap-x-6 w-full xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg tracking-wider mx-4 text-sm">
        <li
          className="relative group hover:text-gray-300 text-gray-400 hidden sm:flex items-center cursor-pointer"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="flex items-center">
            dsfdsf
            <FiChevronDown className="ml-2" />
          </span>

          {open && (
            // Nota: Corregí "min-2-[160px]" a "min-w-[160px]"
            <div className="absolute top-full -left-1 mt-2 hidden group-hover:flex flex-col min-w-[160px] z-50">
              <a href="/" className="px-3 py-2 text-white">jejejej</a>
              <a href="/" className="px-3 text-white">jejejej</a>
            </div>
          )}
        </li>

        <li className="relative group hover:text-gray-300 text-gray-400 hidden sm:flex items-center cursor-pointer">
          <span className="flex items-center">
            dsfdsf
            <FiChevronDown className="ml-2" />
          </span>

          <div className="absolute top-full -left-1 mt-2 hidden group-hover:flex flex-col min-w-[160px] z-50">
            <a href="/" className="px-3 py-2 text-white">jejejej</a>
            <a href="/" className="px-3 text-white">jejejej</a>
          </div>
        </li>

        <li className="hover:text-gray-300 text-gray-400 hidden sm:flex items-center cursor-pointer">
          dsfdsf
        </li>
      </ul>
    </nav>
  );
}
