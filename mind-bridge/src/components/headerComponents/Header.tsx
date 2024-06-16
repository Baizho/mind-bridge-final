import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";

import homeSrc from "../../../public/homeButton.png";
import logoSrc from "../../../public/logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-mind-blue h-20 flex items-center justify-between relative">
      <div className="flex items-center gap-4 ml-4 md:ml-8 h-[40px] w-[40px] md:h-[50px] md:w-[50px]">
        <Image
          src={logoSrc}
          alt="logo"
          className="border-[3px] border-eclipse-purple rounded-full"
        ></Image>
        <div className="text-white text-xl md:text-3xl font-bold ">
          MindBridge
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] items-center flex mr-1 sm:mr-6">
          <Link href="/">
            <Image
              src={homeSrc}
              alt="home-button"
              className=" hover:scale-105"
            ></Image>
          </Link>
        </div>
        <div className="mr-1 sm:mr-6 flex items-center">
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
