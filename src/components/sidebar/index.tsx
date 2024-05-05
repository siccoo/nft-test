import Image from "next/image";
import Link from "next/link";
import React from "react";
import Telegram from "../../assets/img/Telegram.png";
import Discord from "../../assets/img/Discord.png";
import Twitter from "../../assets/img/Twitter.png";

const SideBar = () => {
  return (
    <div className="w-full h-full  right-0 top-0 blur-no fixed z-10">
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 blur "></div> */}
      <div className="flex justify-end items-center  h-full ">
        <div className="flex flex-col justify-between h-screen pt-40 pl-6 bg-black  w-[50%]  blur-0 ">
          <ul className="flex flex-col list-none items-start text-lg satoshi-medium ">
            <li className="border-t border-gray-900 py-3 w-full">
              <Link href="">Creon Pass</Link>
            </li>
            <li className="border-t border-gray-900 py-3 w-full">
              <Link href="">
                Token
                <span className="bg-black text-secondary rounded-lg text-[0.6rem] px-1 items-start align-top -mt-1">
                  SOON
                </span>
              </Link>
            </li>
            <li className="border-t border-gray-900  py-3 w-full">
              <Link href="">
                AI Revenue{" "}
                <span className="bg-black text-secondary rounded-lg text-[0.6rem] px-1 items-start align-top -mt-1">
                  SOON
                </span>
              </Link>
            </li>
            <li className="border-t border-gray-900  py-3 w-full">
              <Link href="">
                AI LunchPad{" "}
                <span className="bg-black text-secondary rounded-lg text-[0.6rem] px-1 items-start align-top -mt-1">
                  SOON
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row gap-2 mb-10 justify-start">
            <Image
              src={Telegram}
              alt="Telegram"
              className="w-7 h-7 cursor-pointer"
            />
            <Image
              src={Discord}
              alt="Discord"
              className="w-7 h-7 cursor-pointer"
            />
            <Image
              src={Twitter}
              alt="Twitter"
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;