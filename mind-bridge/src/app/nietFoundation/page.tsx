import React from "react";

type Props = {};

const nietFoundationPage = (props: Props) => {
  return (
    <div className="min-h-[700px]">
      <div className="flex justify-center items-center w-full ">
        <div className="w-2/3 h-24 text-3xl font-bold mt-10 flex justify-center bg-mind-blue-light items-center text-white">
          <div>
            {" "}
            MindBridge x <span className=" text-red-600"> Niet </span>{" "}
            <span className="text-black">Foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nietFoundationPage;
