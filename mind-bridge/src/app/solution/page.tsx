import React from "react";

type Props = {};

const solutionPage = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center  ">
        <div className="grid lg:grid-cols-2 w-[90%] min-h-[520px] mb-10">
          <div className="flex flex-col items-end justify-end">
            <div className=" w-full flex flex-col gap-8">
              <div className="w-full text-4xl lg:text-6xl h-[10%] font-extrabold text-mind-blue font-markazi">
                MindBridge
              </div>
              <div className="w-full border-[3px] border-mind-blue text-mind-blue font-offside font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl p-2">
                MindBridge вы сможете легко отслеживать и анализировать своё
                состояние с помощью регулярных ментальных проверок и тестов. Мы
                предлагаем обширное изучение различных тем через подкасты,
                психологические игры и образовательные материалы.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="max-w-[450px] w-full aspect-square bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default solutionPage;
