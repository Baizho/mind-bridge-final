import React from "react";

type Props = {};

const statisticsPage = (props: Props) => {
  return (
    <div className="min-h-fit">
      <div className="flex border-8 border-mind-blue h-24 items-center justify-center text-3xl text-mind-blue font-bold font-markazi ">
        Статистика психо-эмоциональных проблем в Казахстане{" "}
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3 h-[400px] justify-center items-center">
          <div className="h-[200px] w-[200px] bg-mind-blue-light rounded-3xl flex flex-col justify-content items-center">
            <div className="w-[90%] h-full ">
              <div className="text-white text-5xl h-[30%] text-center pt-4 font-kiwimaru">
                70%
              </div>
              <div className="text-eclipse-purple text-3xl h-[70%] text-center pt-4">
                здесь надо статистику найти
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-[400px] justify-center items-center pb-32">
          <div className="h-[200px] w-[200px] bg-mind-blue rounded-3xl  flex flex-col justify-content items-center">
            <div className="w-[90%] h-full">
              <div className="text-white text-5xl h-[30%] text-center pt-4 font-kiwimaru">
                70%
              </div>
              <div className="text-eclipse-purple text-3xl h-[70%] text-center pt-4">
                подростков страдают от апатии
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-[400px] justify-center items-center">
          <div className="h-[200px] w-[200px] bg-mind-blue-light rounded-3xl flex flex-col justify-content items-center">
            <div className="text-white text-5xl h-[30%] text-center pt-4 font-kiwimaru">
              70%
            </div>
            <div className="text-eclipse-purple text-3xl h-[70%] text-center pt-4">
              здесь надо статистику найти
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 w-full bg-mind-blue flex justify-center items-center">
        <div className="h-[50%] px-10 border-4 border-white font-khula text-white text-2xl flex font-bold justify-center items-center">
          Присоединяйтесь к нам, на пути к решению!{" "}
        </div>
      </div>
    </div>
  );
};

export default statisticsPage;
