import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./headerComponents/MenuButton";

import logoSrc from "../../public/logo.png";
import homeSrc from "../../public/homeButton.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-mind-blue h-20 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={logoSrc}
          width={50}
          height={50}
          alt="logo"
          className="ml-8 mr-8"
        ></Image>
        <div className="text-white text-3xl font-bold ">MindBridge</div>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={homeSrc}
            alt="home-button"
            width={40}
            className="mr-8"
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
