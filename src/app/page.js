import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
      <main className="mt-10 lg:mt-20 xl:mt-30">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center">
            <h1 className="font-semibold tracking-wide text-xl md:text-2xl xl:text-3xl">JEJEJEJEJ JEJEJ</h1>
            <h2 className="mt-1.5 font-normal text-base md:text-lg xl:text-xl">jejejee</h2>
            <p className="mt-8 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer</p>
            <p className="mt-1.5 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer fedsf</p>
            <p className="mt-1.5 text-sm xl:text-base">saddassdsads gjffg jfjgf sbsb irer dfsf fdssd</p>
            <button className="mt-4 bg-white px-6 py-1 text-sm rounded-lg hover:animate-pulse cursor-pointer text-gray-700">
                <a href="/">aasfjf</a>
            </button>
        </div>
      </main>
  );
}

