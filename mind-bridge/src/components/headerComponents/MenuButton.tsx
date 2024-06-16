"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuSrc from "../../../public/menuButton.png";
import xSrc from "@/../public/x.png";
import statisticsSrc from "../../../public/statistics.png";
import solutionSrc from "../../../public/connection.png";
import appSrc from "../../../public/app.png";
import donationSrc from "../../../public/donation.png";
import nietSrc from "../../../public/ellipse.png";
import Link from "next/link";

type Props = {};

const routes = [
  {
    name: "statistics",
    src: statisticsSrc,
    link: "Статистика",
  },
  {
    name: "solution",
    src: solutionSrc,
    link: "Решение",
  },
  {
    name: "app",
    src: appSrc,
    link: "Приложение",
  },
  {
    name: "donation",
    src: donationSrc,
    link: "Пожертвование",
  },
  {
    name: "nietFoundation",
    src: nietSrc,
    link: "Niet Foundation",
  },
];

const MenuButton = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={handleClick}>
        <Image
          src={menuSrc}
          alt="menu-button"
          width={45}
          className="hover:scale-105"
        ></Image>
      </button>
      {visible && (
        <div className="w-[300px] bg-mind-blue absolute top-[80px] right-0 py-4">
          <div className="flex w-[95%]">
            <div className="flex flex-col w-[95%] pt-5 pl-8 gap-y-8 pb-8 ">
              {routes.map((info, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={`/${info.name}`}
                      className="flex h-[30px] items-center gap-x-4 w-full hover:scale-105"
                    >
                      <Image
                        src={info.src}
                        alt={`${info.name} logo`}
                        width={30}
                      ></Image>
                      <div className="font-khula font-bold text-white text-xl">
                        {info.link}
                      </div>
                    </Link>
                    <div className="border-[1px] border-white mt-3 w-full"></div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col w-[5%]">
              <button
                onClick={handleClick}
                className="flex justify-end hover:scale-105"
              >
                <Image src={xSrc} alt="x button"></Image>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
