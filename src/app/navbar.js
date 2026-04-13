"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center mt-3 my-1.5 mb-20">
      <p className="hidden lg:block absolute left-0 ml-12 py-2">ao</p>
      <ul className="flex flex-nowrap justify-center p-4 sm:py-1.5 bg-white rounded-md xl:gap-x-30 lg:gap-x-24 md:gap-x-16 sm:gap-x-12 gap-x-6 w-full xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg tracking-wider mx-4 text-sm">
        
        <li className="relative hidden sm:flex items-center group">
          <span className="inline-flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md text-gray-400 hover:text-gray-300 transition-colors duration-200">
            dsfdsf
            <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
          </span>
          <div className="absolute top-full -left-3 h-3 w-full"></div>
          <div className="absolute top-full -left-3 mt-3 w-fit rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-md shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-200 delay-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 flex flex-col py-2">
            <a href="/" className="px-8 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
              jejejej
            </a>
            <a href="/" className="px-8 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
              jejejej
            </a>
          </div>
        </li>

        <li className="relative hidden sm:flex items-center group">
          <span className="inline-flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md text-gray-400 hover:text-gray-300 transition-colors duration-200">
            dsfdsf
            <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
          </span>
          <div className="absolute top-full left-0 h-3 w-full"></div>
          <div className="absolute top-full -left-3 mt-3 w-fit rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-md shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-200 delay-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 flex flex-col py-2">
            <a href="/" className="px-8 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
              jejejej
            </a>
            <a href="/" className="px-8 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
              jejejej
            </a>
          </div>
        </li>

        <li className="hover:text-gray-300 text-gray-400 hidden sm:flex items-center cursor-pointer">
          dsfdsf
        </li>
        
      </ul>
    </nav>
  );
}
