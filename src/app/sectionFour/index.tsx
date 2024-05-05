"use client";

import React, { SetStateAction, useState } from "react";
import Vision from "../../assets/img/vision.png";
import Image from "next/image";
import Icon1 from "../../assets/img/accIcon1.png";
import Icon2 from "../../assets/img/accIcon2.png";
import Icon3 from "../../assets/img/accIcon3.png";
import Icon4 from "../../assets/img/accIcon4.png";
import Down from "../../assets/img/down.png";
import Up from "../../assets/img/upArrow.png";

const mission = [
  {
    icon: Icon1,
    header: "Profitability and Growth",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon2,
    header: "Transparent & Fair Decentralized Earnings",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon3,
    header: "Launching the future",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
  {
    icon: Icon4,
    header: "Limitless possibilities of AI and Crypto",
    text: "At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.",
    status: false,
  },
];

function SectionFour() {
  const [openIndex, setOpenIndex] =
    useState<SetStateAction<number | null>>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="flex lg:my-52 my-10">
      <div className="flex flex-col flex-cust-2 pr-38">
        <h3 className="monumentExtended text-3xl uppercase hidden lg:block">
          Our vision is to <br />
          support the innovation <br />
          of AI blockchain <br /> projects
          <span className="text-bg">
            while prioritizing communities and democratizing profits
          </span>
        </h3>
        <h3 className="text-bg monumentExtended text-2xl uppercase lg:hidden">
          our mission is to provide unique, confidential AI-based tools, to
          which you will gain lifetime access through NFT tokens and our CREON
          token.
        </h3>
        <div className="-mr-56 mt-10">
          <Image src={Vision} alt="vision" className="lg:w-[85%] w-[75%]" />
        </div>
      </div>
      <div className="flex flex-cust-12">
        <ul className="list-none flex flex-col">
          {mission.map((data, id) => (
            <li key={id}>
              <div
                className="flex flex-row items-center justify-start mb-10"
                onClick={() => toggleAccordion(id)}
              >
                <div className="w-20 flex mr-5">
                  <Image src={data.icon} alt="icon" className="w-20" />
                </div>
                <div className="satoshi-bold text-white flex flex-cust-1 justify-start cursor-pointer hover:text-blue-500">
                  {data.header}
                </div>
                <div className="ml-5">
                  <Image
                    src={openIndex === id ? Up : Down}
                    alt={openIndex === id ? "up" : "down"}
                    className="w-3 hover:text-blue-500"
                    width={12}
                    height={6}
                  />
                </div>
              </div>

              {openIndex === id && (
                <div className="satoshi-regular text-white justify-start ml-5 mt-2 mb-10">
                  {data.text}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionFour;
