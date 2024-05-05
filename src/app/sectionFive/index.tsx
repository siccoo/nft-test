import React from "react";
import Token from "../../assets/img/image_frame1.png";
import Revenue from "../../assets/img/image_frame2.png";
import LauchPad from "../../assets/img/image_frame3.png";
import Image from "next/image";

const comingsoon = [
  {
    header: "Token",
    subheader: "The gateway token to the world of AI",
    img: Token,
    text: "Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.",
  },
  {
    header: "Revenue",
    subheader: "Driving income and growth through decentralization",
    img: Revenue,
    text: "Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.",
  },
  {
    header: "LauchPad",
    subheader: "Driving the future of AI Innovation",
    img: LauchPad,
    text: "Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.",
  },
];

const SectionFive = () => {
  return (
    <div className="flex flex-row md:gap-8 gap-4 mb-24 overflow-hidden overflow-x-scroll  pt-5">
      {comingsoon.map((data, id) => {
        return (
          <div key={id} className="w-full cust-bg ">
            <div className="flex flex-col md:w-full w-[20rem]">
              <div className="w-[94%] flex justify-end -mt-1">
                <button className="bg-white uppercase rounded-md text-black satoshi-bold leading-3 text-[0.60rem] px-1">
                  Coming soon
                </button>
              </div>
              <div className="flex flex-col pl-6 h-32">
                <h3 className="monumentExtended md:text-3xl text-2xl uppercase text-white my-3">
                  {data.header}
                </h3>
                <h4 className="satoshi-bold text-bg flex flex-cust-1 justify-start ">
                  {data.subheader}
                </h4>
              </div>
              <div className="w-[94%] flex justify-start overflow-hidden rounded-md  news">
                <Image src={data.img} alt="coming soon" className="news-img" />
              </div>
              <p className="w-[94%] satoshi-regular text-sm text-white pt-5 pl-5 pb-10 text-[0.88rem]">
                {data.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SectionFive;
