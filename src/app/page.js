import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
      <main className="mt-8 md:mt-12 lg:mt-18 xl:mt-26 mb-12">
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-24 lg:gap-46">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[#555934] tracking-wider text-xl md:text-2xl xl:text-3xl">JEJEJEJEJ JEJEJ</h1>
                <h2 className="mt-1.5 font-semibold text-[#8C5B3E] text-base md:text-lg xl:text-xl">jejejee</h2>
                <p className="mt-8 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer</p>
                <p className="mt-1.5 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer fedsf</p>
                <p className="mt-1.5 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer dfsf fdssd</p>
                <button className="mt-4 font-semibold bg-[#555934] px-6 py-1 text-sm rounded-full hover:animate-pulse cursor-pointer text-white">
                    <a href="/">aasfjf</a>
                </button>
            </div>
            
            <div className="">
                <div className="bg-black h-40 w-60 rounded-md"></div>
            </div>
        </div>
        
      </main>
  );
}

