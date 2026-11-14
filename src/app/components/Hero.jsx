export default function Hero() {
  return (
    <>
      <div className="pt-22 text-center ">
        <p className="text-[12px] md:text-2xl text-[#C78617] cormorant-garamond uppercase tracking-[4px] font-semibold">
          The Wedding of
        </p>
        <h2 className="text-[#C78617] cormorant-upright-regular text-center md:text-4xl text-[38px] lg:text-[60px] leading-tight mt-8">
          Hanshul
        </h2>

        <h2 className="text-[#C78617] cormorant-upright-regular text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight">
          <span className="text-[#C78617] cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
            &
          </span>
          <br />
          Pritish
        </h2>
      </div>

      <div className="relative mx-auto flex min-h-[650px]  flex-col items-center overflow-hidden rounded-[32px] border border-[#efd9a9] bg-[#FEF8ED] px-6 py-7 text-center shadow-[0_15px_35px_rgba(174,123,42,0.08)] sm:min-h-[680px] sm:max-w-[400px] sm:px-8 mt-30">
        {/* Heading */}
        <p className=" text-[12px] uppercase tracking-[4px] text-[#bd8737] cormorant-garamond font-semibold">
          The Invitation
        </p>

        {/* Divider */}
        <div className="my-7 flex w-full items-center justify-center gap-4">
          <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
          <span className="text-lg leading-none text-[#b97b17]">✦</span>
          <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
        </div>

        {/* Invitation text */}
        <p className="cormorant-garamond text-[14px] italic leading-[1.75] text-[#5c5959]">
          With the blessings of
          <br />
          <b>Shri S.C. Bajaj & Late Kanta Devi</b>
          <br />
          request the pleasure of your gracious presence at the wedding of their
          beloved Grand Daughter,
          <br />
        </p>

        {/* Couple names */}
        <div className="mt-7 w-full">
          <h1 className=" text-[43px] italic text-[#d99019] sm:text-[48px] cormorant-upright-regular">
            Hanshul
            <p className="cormorant-garamond text-[14px] italic leading-1 text-[#d99019]">
              (Meenakshi Bajaj & Kuldeep Bajaj)
            </p>
          </h1>

          <p className="my-6 cormorant-garamond text-[21px] italic text-[#cf8b21]">
            with
          </p>

          <h2 className="text-[48px] italic leading-[1.1] text-[#d99019] sm:text-[54px] cormorant-upright-regular">
            Pritish
          </h2>
          <p className="cormorant-garamond text-[14px] italic mt-.5 text-[#d99019]">
              (Shruti Jain & Deepak Jain)
            </p>
        </div>

        {/* Journey message */}
        <p className="mt-10 cormorant-garamond text-[14px] italic leading-relaxed text-[#5c5959]">
          
          As they embark on a beautiful journey of love, companionship and
          togetherness.
          <br />
          Your presence and blessings will make this joyous occasion even more
          special .
        </p>

        {/* Bottom divider */}
        <div className="my-6 flex w-full items-center justify-center gap-4">
          <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d9a64e]" />
          <span className="text-lg leading-none text-[#b97b17]">✦</span>
          <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d9a64e]" />
        </div>

        {/* Closing message */}
        <p className="mt-1 text-[24px] italic text-[#b96c68] cormorant-upright-regular">
          with love &amp; blessings
        </p>
      </div>
    </>
  );
}
