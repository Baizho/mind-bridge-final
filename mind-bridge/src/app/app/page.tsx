import React from "react";
import Image from "next/image";
import arrowLeft from "../../../public/Arrow 5.png";
import arrowRight from "../../../public/Arrow 6.png";
import phoneFront from "../../../public/loading.png";
import phoneBack from "../../../public/Purple iphone 14 Pro.png";
type Props = {};

const appPage = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <div className="w-2/3 text-4xl text-mind-blue font-bold">
          Прототип приложения
        </div>
        <div className="border-[3px] border-eclipse-purple w-[27%] mt-2"></div>
      </div>
      <div className="flex items-center justify-center gap-x-10">
        {/* <Image src={phoneBack} alt="phoneBack" height={300}></Image>
        <div>
          <Image src={arrowLeft} alt="arrowLeft" height={35}></Image>
        </div> */}
        <Image
          src={phoneFront}
          alt="phoneFront"
          height={350}
          className="border-2 border-black rounded-xl"
        ></Image>
        {/* <div>
          <Image src={arrowRight} alt="arrowRight" height={35}></Image>
        </div>
        <Image src={phoneBack} alt="phoneBack" height={300}></Image> */}
      </div>
      <div className="p-6">
        <div className="w-2/3 text-3xl text-mind-blue font-bold">
          До выхода приложения, осталось:{" "}
        </div>
        <div className="border-[3px] border-eclipse-purple w-[27%] mt-2"></div>
      </div>
      <div className="app-pageInstructionLine"></div>
      <div className="flex justify-center pb-10">
        <div className="flex items-center justify-center h-32 bg-mind-blue-light w-2/3">
          <div className="text-white text-xl">About two more years</div>
        </div>
      </div>
    </div>
  );
};

export default appPage;
