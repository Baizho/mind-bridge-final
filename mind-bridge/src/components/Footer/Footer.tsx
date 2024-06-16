import React from "react";
import Image from "next/image";
import logoSrc from "@/../public/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex justify-center w-full bg-mind-blue">
        <div className="flex flex-col w-1/3 h-[200px] items-center justify-center">
          <Image src={logoSrc} alt="logo" width={150} height={150}></Image>
        </div>
        <div className="flex flex-col w-1/3 h-[200px] items-center justify-center">
          <div className="h-[175px]">
            <div className="text-center font-bold font-kadwa text-white text-4xl">
              Contact Us
            </div>
            <div className="border-2 border-eclipse-purple"></div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-[200px] items-center justify-center"></div>
      </div>
    </>
  );
};

export default Footer;
