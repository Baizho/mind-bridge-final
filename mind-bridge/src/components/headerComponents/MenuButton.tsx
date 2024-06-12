"use client";

import React from "react";
import Image from "next/image";
import menuSrc from "../../../public/menuButton.png";

type Props = {};

const MenuButton = (props: Props) => {
  const handleClick = () => {};
  return (
    <button onClick={handleClick}>
      <Image src={menuSrc} alt="menu-button" width={45}></Image>
    </button>
  );
};

export default MenuButton;
