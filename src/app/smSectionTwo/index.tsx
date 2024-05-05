import React from "react";
import Image from "next/image";
import Video from "../../assets/img/Video.png";

const SmSectionTwo = () => {
  return (
    <div className="flex flex-col mt-20 mb-36">
      <div className="flex flex-col">
        <h2 className="uppercase text-3xl text-white monumentExtended pt-6">
          creon pass nft
        </h2>
        <p className="text-bg satoshi-bold mb-5 mt-5 lg:hidden block border-t border-gray-900 pt-4">
          Access to confidential AI tools enabling business optimization and
          development. Only NFT holders will have the ability to use a given
          tool.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col-reverse">
        <div className=" flex-col lg:w-[50%] w-[60%] sm:flex hidden">
          <div className="lg:hidden flex flex-col mb-5 gap-2 ">
            <div>
              <p className="flex flex-cust-2 satoshi-regular mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
                Prospect to derive financial benefits through the redistributed
                profit generated from AI tools, but only when the majority of
                NFT holders decide to release the tool publicly.
              </p>
            </div>
            <p className="flex  text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              The possibility of allocating investments into new, exceptional
              tokenized AI tools through Creon Launchpad.
            </p>
            <p className="flex  text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              Early access to allocations in inspiring tokenized projects, real
              businesses based on AI.
            </p>
          </div>
          <button className="bg-custom text-white w-[72%] py-3 rounded satoshi-medium text-sm">
            Buy Creon Pass
          </button>
        </div>
        <div className="sm:hidden flex flex-col mb-5 mt-5">
          <div>
            <p className="flex flex-cust-2 satoshi-regular mb-2 text-sm text-[0.88rem] border border-gray-900 rounded p-2">
              Prospect to derive financial benefits through the redistributed
              profit generated from AI tools, but only when the majority of NFT
              holders decide to release the tool publicly.
            </p>
          </div>
          <div className="flex flex-row gap-2 mb-5">
            <p className="flex mb-2 text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              The possibility of allocating investments into new, exceptional
              tokenized AI tools through Creon Launchpad.
            </p>
            <p className="flex mb-2 text-sm satoshi-regular text-[0.88rem] border border-gray-900 rounded p-2">
              Early access to allocations in inspiring tokenized projects, real
              businesses based on AI.
            </p>
          </div>
          <button className="bg-custom text-white w-full py-3 rounded satoshi-medium text-lg">
            Buy Creon Pass
          </button>
        </div>
        <div className="flex">
          <Image src={Video} alt="video" className=" sm:h-[30rem] h-[20rem]" />
        </div>
      </div>
    </div>
  );
}

export default SmSectionTwo;