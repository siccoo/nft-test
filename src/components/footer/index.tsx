"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import TelegramIcon from "@/assets/img/Telegram.png";
import DiscordIcon from "@/assets/img/Discord.png";
import TwitterIcon from "@/assets/img/Twitter.png";

const Footer = () => {
  return (
    <div className="news-pattern bg-cover bg-no-repeat">
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="lg:w-[80%] w-[95%] h-full  mb-10 items-center flex-row justify-between gap-4 sm:flex hidden">
          <div className="flex flex-row items-center">
            <p className="satoshi-regular text-xs text-white mr-20">
              &copy; Creon 2023. All rights reserved.
            </p>
            <div className="flex flex-row gap-2">
              <Image
                src={TelegramIcon}
                alt="Telegram"
                className="w-7 h-7 cursor-pointer"
              />
              <Image
                src={DiscordIcon}
                alt="Discord"
                className="w-7 h-7 cursor-pointer"
              />
              <Image
                src={TwitterIcon}
                alt="Twitter"
                className="w-7 h-7 cursor-pointer"
              />
            </div>
          </div>
          <p className="satoshi-regular text-xs text-white">
            Powered by{" "}
            <span className="monumentExtended text-xs">NIFTABLES</span>
          </p>
        </div>
        <div className="w-[95%]  mb-20  flex-col justify-center items-center gap-4 sm:hidden flex">
          <div className="flex flex-row gap-2">
            <Image
              src={TelegramIcon}
              alt="Telegram"
              className="w-7 h-7 cursor-pointer"
            />
            <Image
              src={DiscordIcon}
              alt="Discord"
              className="w-7 h-7 cursor-pointer"
            />
            <Image
              src={TwitterIcon}
              alt="Twitter"
              className="w-7 h-7 cursor-pointer"
            />
          </div>
          <p className="satoshi-regular text-xs text-white ">
            &copy; Creon 2023. All rights reserved.
          </p>

          <p className="satoshi-regular text-xs text-white">
            Powered by{" "}
            <span className="monumentExtended text-xs">NIFTABLES</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
