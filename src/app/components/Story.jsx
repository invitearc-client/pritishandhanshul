"use client";

import Couple from "../components/Couple";

export default function Story() {
  

  return (
    <div className="text-center mt-32">
      <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold">
        A Glimpse of Our Journey
      </p>
      <h2 className="text-[#C78617] cormorant-upright-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-2">
        Our Story
      </h2>

      <div className="my-6 flex w-full items-center justify-center gap-4">
        <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
        <span className="text-lg leading-none text-[#b97b17]">✦</span>
        <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
      </div>
      <p className="mt-4 cormorant-garamond text-[14px] italic leading-relaxed text-[#5c5959]">
        The Beginnig of us❤️
      </p>

      <p className="mt-2 cormorant-garamond text-[12px]  font-bold uppercase tracking-[1px]  text-[#5c5959]  text-center">
        ✦ Click To Change Photos ✦
      </p>


 <Couple className="relative z-10 mt-16 w-full border-0 md:mt-20" />


  
    </div>
  );
}
