"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/Logo.png";
import LogoMobile from "../../assets/img/Logo.svg";
import Menu from "../../assets/img/menu.png";
import Close from "../../assets/img/close.png";
import SideBar from "../sidebar/index";

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="flex flex-row justify-between">
      <Image src={Logo} alt="logo" className="lg:flex w-28 hidden" />
      <Image
        src={LogoMobile}
        alt="logo"
        className={`flex w-28 lg:hidden z-40 ${toogle ? "fixed" : ""}`}
      />
      <div className="lg:flex flex-col justify-center hidden">
        <ul className="flex flex-row list-none justify-end items-start text-sm satoshi-medium gap-10">
          <li>
            <Link href="">Creon Pass</Link>
          </li>
          <li>
            <Link href="">
              Token
              <span className="bg-black text-secondary rounded-lg text-[0.5rem] px-1 items-start align-top -mt-1">
                SOON
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              AI Revenue{" "}
              <span className="bg-black text-secondary rounded-lg text-[0.5rem] px-1 items-start align-top -mt-1">
                SOON
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              AI LunchPad{" "}
              <span className="bg-black text-secondary rounded-lg text-[0.5rem] px-1 items-start align-top -mt-1">
                SOON
              </span>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="bg-transparent px-5 py-2 border-white border rounded hover:text-white hover:border-blue-500 hover:bg-blue-500"
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex z-30">
        <Link
          href=""
          className={`bg-transparent px-5 py-1 border-white text-lg satoshi-medium border rounded mr-5 z-40 ${
            toogle ? "fixed right-12" : ""
          }`}
        >
          Connect
        </Link>
        {toogle && <SideBar />}
        {toogle ? (
          <button onClick={toggleHandler} className="z-40 fixed right-3">
            {toogle && <Image src={Close} alt="menu" className="" />}
          </button>
        ) : (
          <button onClick={toggleHandler} className="z-40">
            <Image src={Menu} alt="menu" className="" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
