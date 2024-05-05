import React from "react";
import Image1 from "../../assets/img/image1.png";
import Image2 from "../../assets/img/image2.png";
import Image3 from "../../assets/img/image3.png";
import Image from "next/image";

const cardData = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    img: Image1,
  },
  {
    title: "AI Tools and Market",
    text: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    img: Image2,
  },
  {
    title: "AI, Crypto, and NFT Market",
    text: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    img: Image3,
  },
];

const SectionSix = () => {
  return (
    <div className="news-pattern bg-cover bg-no-repeat">
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="lg:w-[80%] w-[95%]  mb-20 flex sm:flex-col gap-4 overflow-hidden overflow-x-scroll">
          {cardData.map((data, id) => {
            return (
              <div className="  w-full cust-bg lg:pl-7  flex-grow" key={id}>
                <div className="sm:w-full w-[20rem] cust-bg flex flex-col-reverse sm:flex-row">
                  <div className="flex flex-col flex-cust-2">
                    <h3 className="monumentExtended text-3xl uppercase text-white pt-7 lg:block hidden">
                      {data.title}
                    </h3>
                    <h3 className="monumentExtended text-xl uppercase text-white pt-7 lg:hidden block">
                      {data.title}
                    </h3>
                    <p className="satoshi-regular text-xs text-white pt-3 pr-6 text-[0.88rem]">
                      {data.text}
                    </p>
                  </div>
                  <Image src={data.img} alt="news" className="flex-cust-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
