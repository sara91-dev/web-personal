import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
      <main className="">
        {/* NAVBAR */}
        <div className="flex justify-center mt-3 my-1.5">
            <p className="hidden lg:block absolute left-0 ml-12 py-2">ao</p>
            <ul className="flex flex-nowrap justify-center p-4 sm:py-1.5 bg-white rounded-md xl:gap-x-30 lg:gap-x-24 md:gap-x-16 sm:gap-x-12 gap-x-6 w-full xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg tracking-wider mx-4">
                <li className="text-gray-400 hidden sm:flex items-center">
                    dsfdsf
                    <FiChevronDown className="ml-2" />
                </li>
                <li className="text-gray-400 hidden sm:flex items-center">
                    dsfdsf
                    <FiChevronDown className="ml-2" />
                </li>
                <li className="text-gray-400 hidden sm:flex items-center">
                    dsfdsf
                    <FiChevronDown className="ml-2" />
                </li>
            </ul>
        </div>
        {/* BOTÓN */}
        <div className="flex justify-center mt-70">
            <button type="button" 
            className="bg-white inline-flex items-center rounded-sm pr-4 pl-6 text-gray-400 tracking-wider cursor-pointer">
              fgfdgfy
              <FiChevronDown className="ml-2" />
            </button>
        </div>
      </main>
  );
}

