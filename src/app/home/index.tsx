/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "@/components/navbar";

const Entry = () => {
  return (
    <header className="header-pattern lg:h-[90vh] bg-cover bg-center bg-no-repeat flex justify-center">
      <div className="w-[95%] mt-5">
        <Navbar />
        <div
          className={`w-full h-full flex justify-center lg:pb-20 items-end mx-auto relative z-0`}
        >
          <div className="xl:w-10/12 w-[99%] mt-[5rem]  mb-[5rem]">
            <HeroText />
          </div>
        </div>
      </div>
    </header>
  );
};

function HeroText() {
  return (
    <div className="mt-[28rem] sm:mb-0 ">
      <h1 className="m-0 self-stretch relative text-inherit leading-[110%] uppercase text-5xl mb-7 text-white monumentExtended lg:flex hidden">
        The world's first <br />
        platform for Tokenizing <br />
        AI blockchain projects
      </h1>
      <h1 className="uppercase sm:text-4xl sm:pt-0 sm:pb-0 pt-0 pb-10 text-3xl text-white monumentExtended mb-20 lg:hidden">
        Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
      </h1>
      <h2 className="lg:inline  hidden text-bg-inline border-custom py-2 satoshi-bold">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </h2>
      <h2 className="lg:hidden inline  text-bg border-custom py-2 satoshi-bold ">
        Creon «Create On» confidential AI Tools for granting access through
        NFTs.
      </h2>
    </div>
  );
}

export default Entry;
