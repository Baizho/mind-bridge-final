import Image from "next/image";
import Link from "next/link";
import playSrc from "../../public/watch-button-logo.png";

export default function Home() {
  return (
    <div className=" min-h-fit">
      <div className="flex justify-center  ">
        <div className="grid lg:grid-cols-2 w-[90%] min-h-[600px]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[600px] h-[500px] flex flex-col gap-8 py-8">
              <div className="text-6xl font-extrabold text-mind-blue font-markazi">
                MindBridge
              </div>
              <div className="w-full border-2 border-mind-blue text-mind-blue font-offside text-5xl font-[500] p-2">
                Ваш проводник к{" "}
                <span className="text-eclipse-purple">
                  психо эмоциональному
                </span>{" "}
                благополучию!
              </div>
              <div className="w-full">
                <Link
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  className="w-2/5 min-w-[100px] h-[48px] rounded-full bg-mind-blue flex justify-start items-center px-4 ml-4 gap-x-3 hover:shadow-lg"
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
          <div className="flex flex-col items-center justify-center">
            <div className="min-w-[500px] aspect-square bg-gray-300 border-[6px] border-eclipse-purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
