import Image from "next/image";
import React from "react";
import ProfitImg from "../../assets/img/profiting.png";
import Video from "../../assets/img/Video-high.png";

const SectionThree = () => {
  return (
    <div className="flex flex-col">
      <h2 className="uppercase lg:text-6xl text-3xl text-white monumentExtended lg:mb-5">
        Profiting Through
      </h2>
      <div className="flex justify-end text-right mb-10">
        <h2 className="uppercase text-bg text-3xl  monumentExtended">
          AI Innovation & Decentralization
        </h2>
      </div>
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex flex-grow-[0.8] ">
          <Image
            src={ProfitImg}
            alt="Profiting"
            className="w-full hidden lg:block"
          />
          <Image
            src={Video}
            alt="Profiting"
            className="w-full lg:hidden block"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center h-auto md:border-l md:border-gray-900 md:border-r md:px-5">
          <h3 className="satoshi-bold text-white mb-5 hidden lg:block">
            The dynamic community driven business model of the future.
          </h3>
          <h3 className="satoshi-bold text-sm text-white mb-5 block lg:hidden">
            A Dynamic Business Model for Sustainable Growth and Community
            Engagement
          </h3>
          <p className="satoshi-regular text-sm text-white text-[0.88rem]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
