import React from 'react'

export default function Hero() {
  return (
    <section className="max-w-330 w-full mx-auto">
      <h1 className="text-[9rem] font-fair leading-[1] tracking-tigh font-bold text-zinc-300/90">
        Dictionary of <br /> color <br /> combinations
      </h1>
      <p className="font-fair text-[1.7rem] mt-7 text-zinc-300/90">
        A reference for dressing well, visual harmony and modern <br /> aesthetics.
      </p>
      <div className="flex flex-row items-center gap-8 mt-15">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-fair text-zinc-300/90" id="totalColors">
            161
          </h1>
          <span className="font-fair text-lg uppercase tracking-wide text-zinc-300/80 ">
            Colors
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-fair text-zinc-300/90">348</h1>
          <span className="relative left-5 font-fair text-lg uppercase tracking-wide  text-zinc-300/80">
            Combinations
          </span>
        </div>
      </div>
    </section>
  );
}

