import React from "react";

type Props = {};

const donationPage = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="flex p-10 h-32 justify-center font-bold text-3xl md:text-5xl text-mind-blue">
        Поддержите MindBridge!{" "}
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl md:text-3xl text-mind-blue font-bold mx-4 text-center">
              Мы стремимся разрешить проблему депрессии и суицида в Казахстане,
              создавая безопасное и поддерживающее пространство для школьников.
              Подключайтес!
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="h-[200px] w-[200px] md:w-[300px] bg-mind-blue rounded-2xl text-5xl text-white font-bold hover:scale-105">
              Donate!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default donationPage;
