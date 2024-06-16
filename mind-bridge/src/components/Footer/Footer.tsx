import React from "react";
import Image from "next/image";
import logoSrc from "@/../public/logo.png";
import phoneSrc from "@/../public/phone-logo.png";
import mailSrc from "@/../public/mail-logo.png";
import instagramSrc from "@/../public/instagram-logo.png";
import youtubeSrc from "@/../public/youtube-logo.png";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex justify-center w-full bg-mind-blue">
        <div className="flex flex-col md:w-1/3 w-0 h-[200px] items-center justify-center">
          <Image src={logoSrc} alt="logo" width={150} height={150}></Image>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-2/3">
          <div className="flex flex-col h-[200px] w-full items-center justify-center ">
            <div className="h-[160px] flex flex-col items-center">
              <div className="text-center font-kadwa font-bold text-white text-4xl">
                Contact us
              </div>
              <div className="border-2 border-eclipse-purple mt-2 w-[95%]"></div>
              <div className="w-full h-[32px] flex mt-4 items-center gap-x-4">
                <Image src={phoneSrc} alt="phone logo" width={30}></Image>
                <div className="text-white font-semibold text-lg">
                  8-702-108-2007
                </div>
              </div>
              <div className="w-full h-[32px] flex mt-4 items-center gap-x-4">
                <Image src={mailSrc} alt="mail logo" width={30}></Image>
                <div className="text-white font-semibold text-lg">
                  @mindbridge.qz
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full  h-[200px]  items-center justify-center">
            <div className="h-[160px] flex flex-col items-center">
              <div className="text-center font-kadwa font-bold text-white text-4xl">
                Social Media
              </div>
              <div className="border-2 border-eclipse-purple mt-2 w-[95%]"></div>
              <Link
                href="https://www.instagram.com/mindbridge.kz/"
                target="_blank"
                className="w-full h-[32px] flex mt-4 items-center gap-x-4"
              >
                <Image
                  src={instagramSrc}
                  alt="instagram logo"
                  width={30}
                ></Image>
                <div className="text-white font-semibold text-lg">
                  @mindbridge.kz
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@MindBridgeqz"
                target="_blank"
                className="w-full h-[32px] flex mt-4 items-center gap-x-4"
              >
                <Image src={youtubeSrc} alt="youtube logo" width={30}></Image>
                <div className="text-white font-semibold text-lg">
                  MindBridgeqz
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
