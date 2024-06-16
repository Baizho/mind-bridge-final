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
      <div className="flex items-center gap-4 ml-8 h-full">
        <Image
          src={logoSrc}
          width={50}
          height={50}
          alt="logo"
          className="border-[3px] border-eclipse-purple rounded-full"
        ></Image>
        <div className="text-white text-3xl font-bold ">MindBridge</div>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={homeSrc}
            alt="home-button"
            width={40}
            className="mr-8 hover:scale-105"
          ></Image>
        </Link>
        <div className="mr-6 flex items-center">
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
