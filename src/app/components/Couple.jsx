"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/assets/hanshul1.jpg",
  "/assets/hanshul2.jpg",
  "/assets/hanshul3.jpg",
   "/assets/hanshul4.jpg",
    "/assets/hanshul5.jpg",
     "/assets/hanshul6.jpg",
];

const stories = [
  {
    title:"Where It All Began",
    description:
      "Destiny brought them together in college, and friendship blossomed before life took them on separate journeys.",
  },
  {
    title:"A London Reunion",
    description:
      "Different paths, familiar faces, and a little help from common friends, London brought them together once again, and friendship picked up right where it left off.",
  },
  {
    title:"The Second Time Around",
    description:
      "Four years later, fate brought them back into each other’s lives, and two best friends said YES to forever.",
  },
   {
    title:"From Friends to Soulmates",
    description:
      "Somewhere between endless conversations and little moments, they fell beautifully in love and found their forever person.",
  },
   {
    title:"Partners in Crime",
    description:
      "A lifetime of silly jokes, endless teasing and being each other’s favourite troublemakers, because the best kind of love is also the most fun!",
  },
   {
    title:"Happily Ever After",
    description:
      "And so begins their forever, filled with love, laughter and endless adventures, with plenty of pizzas, pastas and date nights along the way!",
  },
];

const STICKY_TOP = 96;

export default function Couple() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const track = trackRef.current;
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const total = track.offsetHeight - window.innerHeight;

        if (total <= 0) return;

        const scrolled = Math.max(0, Math.min(STICKY_TOP - rect.top, total));

        const progress = scrolled / total;

        const index = Math.min(
          images.length - 1,
          Math.floor(progress * images.length),
        );

        setCurrentIndex((prev) => (prev === index ? prev : index));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // 👇 Click pe next image
  const goNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      ref={trackRef}
      className="relative mt-16"
      style={{
        height: `${(images.length + 1) * 6}vh`,
      }}
    >
      <div
        className="sticky flex items-start justify-center"
        style={{ top: `${STICKY_TOP}px` }}
      >
        <div className="relative h-[420px] w-[300px] md:h-[520px] md:w-[380px]">
          {images.map((src, index) => {
            const offset = index - currentIndex;
            const previous = offset < 0;
            const isActive = offset === 0;

            return (
              <div
                key={src}
                // 👇 sirf active image pe click chalega
                onClick={isActive ? goNext : undefined}
                className={`absolute inset-0 ${
                  isActive ? "cursor-pointer" : ""
                }`}
                style={{
                  transform: previous
                    ? "translateY(-115%) rotate(-8deg) scale(0.92)"
                    : `translateY(${offset * 12}px) scale(${
                        1 - Math.min(offset * 0.025, 0.15)
                      }) rotate(${offset * 1.2}deg)`,
                  opacity: previous ? 0 : offset <= 2 ? 1 : 0,
                  zIndex: images.length - index,
                  transition:
                    "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms ease",
                  // 👇 pointerEvents hata diya (ya "auto" kar diya) taaki click kaam kare
                  pointerEvents: isActive ? "auto" : "none",
                  visibility: Math.abs(offset) > 3 ? "hidden" : "visible",
                }}
              >
                {/* <div className="flex h-150 w-full flex-col overflow-hidden rounded-[12px] border-6 border-[#e8c66c] bg-[#fffaf0]">
                  <img
                    src={src}
                    alt={`Couple ${index + 1}`}
                    draggable={false}
                    className="h-3/5 md:h-full w-full rounded-t-[12px] object-cover shadow-xl"
                  />
 <div className="flex flex-col items-center justify-center px-3 text-center py-2.5">
                    <p className="text-[14px] leading-[1.5] italic text-[#535352] cormorant-garamond">
                      {stories[index]?.title}
                    </p>
              
                    <p className="text-[14px] leading-[1.5] italic text-[#535352] cormorant-garamond">
                      {stories[index]?.description}
                    </p>
                  </div>
                </div> */}
                <div className="flex h-[520px] w-full flex-col overflow-hidden rounded-[12px] border-[6px] border-[#e8c66c] bg-[#fffaf0] md:h-[620px]">

  {/* Image */}
  <div className="h-[65%] w-full shrink-0 overflow-hidden">
    <img
      src={src}
      alt={`Couple ${index + 1}`}
      draggable={false}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Title & Description */}
  <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-3 text-center">

    <h3 className="cormorant-garamond text-[20px] font-semibold leading-tight text-[#535352]">
      {stories[index]?.title}
    </h3>

    <p className="cormorant-garamond text-[15px] italic leading-[1.5] text-[#535352]">
      {stories[index]?.description}
    </p>

  </div>
</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
