import Image from "next/image";
import Link from "next/link";
import playSrc from "../../public/watch-button-logo.png";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="flex justify-center  ">
        <div className="grid lg:grid-cols-2 w-[90%] min-h-[520px] mb-10">
          <div className="flex flex-col items-center justify-end">
            <div className="max-w-[600px] h-[400px] lg:h-[500px] w-full flex flex-col gap-8 py-8">
              <div className="text-4xl sm:text-6xl font-extrabold text-mind-blue font-markazi">
                MindBridge
              </div>
              <div className="w-full border-2 border-mind-blue text-mind-blue font-offside text-3xl sm:text-4xl xl:text-5xl font-[500] p-2">
                Ваш проводник к{" "}
                <span className="text-eclipse-purple">
                  психо эмоциональному
                </span>{" "}
                благополучию!
              </div>
              <div className="w-full">
                <Link
                  href="https://www.youtube.com/watch?v=-q2d2IcLUrA"
                  target="_blank"
                  className="hover:scale-105 w-2/5 min-w-[250px] h-[48px] rounded-full bg-mind-blue-light flex justify-start items-center px-4 sm:ml-4 gap-x-3 hover:shadow-lg"
                >
                  <Image
                    src={playSrc}
                    width={30}
                    height={30}
                    priority
                    alt="playLogo"
                  ></Image>
                  <div className="text-white font-bold">Смотреть подкаст</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end">
            <div className="max-w-[500px] w-full aspect-square bg-gray-300 border-[6px] border-eclipse-purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
