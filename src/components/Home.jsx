import React from "react";
import VideoBG from "../assets/videobg.mp4";
import Marques from "./Marques";
import Navbars from "./Navbars";

function Home() {
  return (
    <>
      <div className="w-full h-screen block relative overflow-hidden">
        <div className="w-full h-screen absolute top-0 left-0">
          <video
            src={VideoBG}
            className="w-full h-screen object-cover -z-50 bg-center bg-cover m-auto absolute"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="w-full absolute bottom-0 h-screen bg-gradient-to-t from-black"></div>
        <div className="z-10 min-h-screen flex flex-col justify-end px-10 relative">
          <div className="z-20 flex justify-between items-end pb-5 relative">
            <h1 className="w-[35%] flex-none my-0 font-normal text-6xl block text-white font-['Instrument Sans']">
              <span class="block">Blockchain</span>
              <span class="whitespace-nowrap break-normal bg-[url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a59_hero-title-arrow.svg')] bg-['0 40%'] bg-no-repeat bg-[length:2.25rem] pl-[3.125rem]">
                AI Execution
              </span>
              <span class="block">Protocol</span>
            </h1>
            <div className="block w-[45%] pb-2 pr-40">
              <p className="text-gray-100 text-base mt-0 mb-7 font-light">
                A Web3 AI execution technology that provides you with access to
                CeFi, DeFi, and NFT crypto markets through an all-in-one
                conversational AI interface.
              </p>
              <div className="flex h-10 align-middle space-x-3">
                <a
                  href="https://docsend.com/view/4crdyu7mm875xd6n"
                  target="_blank"
                  className="border-2 border-t-0 border-l-0 rounded-lg border-indigo-700 relative w-[137px]"
                >
                  <div className="text-indigo-700 absolute z-0">
                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 135 18"
                      width="135"
                      height="18"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        fill-rule="evenodd"
                        class="a"
                        d="m9 2.8c0.9-1.1 2.3-1.8 3.8-1.8h123.2c2.8 0 5 2.2 5 5v28c0 2.8-2.2 5-5 5h-130c-2.8 0-5-2.2-5-5v-19.9c0-1.2 0.4-2.3 1.2-3.2zz"
                      ></path>
                    </svg>
                    <span className="border-l-2 w-1 h-5 inline-block rounded-bl-lg border-indigo-700">
                      <span></span>
                    </span>
                  </div>
                  <p className="text-gray-100 pt-2 z-10 text-center font-['Instrument Sans'] font-light text-base">
                    Our Pitchdeck
                  </p>
                </a>
                <a
                  href="https://docsend.com/view/4crdyu7mm875xd6n"
                  target="_blank"
                  className="border-2 border-t-0 border-l-0 rounded-lg border-indigo-700 relative w-[137px]"
                >
                  <div className="text-indigo-700 absolute z-0">
                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 135 18"
                      width="135"
                      height="18"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        fill-rule="evenodd"
                        class="a"
                        d="m9 2.8c0.9-1.1 2.3-1.8 3.8-1.8h123.2c2.8 0 5 2.2 5 5v28c0 2.8-2.2 5-5 5h-130c-2.8 0-5-2.2-5-5v-19.9c0-1.2 0.4-2.3 1.2-3.2zz"
                      ></path>
                    </svg>
                    <span className="border-l-2 w-1 h-5 inline-block rounded-bl-lg border-indigo-700">
                      <span></span>
                    </span>
                  </div>
                  <p className="text-gray-100 pt-2 z-10 text-center font-['Instrument Sans'] font-light text-base">
                    Our Pitchdeck
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="text-white font-extralight text-sm text-center my-auto">
              AVAILABLE ON:
            </div>
            <div className="flex space-x-16">
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21d33fb6cf4529d94c421_logo-hero-01.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21db57c61c8b7e100f23c_logo-hero-02.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e1196276710947bbb38_logo-hero-03.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21ef9546edb766cb0f0e4_logo-hero-07.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e314c6d54525a254aa1_logo-hero-04.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e705ee92679b942e3c3_logo-hero-05.svg"
                alt="AI Icon"
                height={30}
              />
              <img
                src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/65b21e975ddf7f56617d1e91_logo-hero-06.svg"
                alt="AI Icon"
                height={50}
              />
            </div>
          </div>
          <div className="border-t border-slate-500 w-screen -ml-10 my-5 opacity-40"></div>
          <div className="flex space-x-3 w-full pb-4">
            <div className="text-slate-100 font-extralight text-sm mr-5 py-2 whitespace-nowrap">
              <span className="w-32">TRUSTED BY:</span>
            </div>
            <div>
              <Marques />
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-10 text-slate-100 bg-gradient-to-b from-slate-950 to-slate-800 rounded-sm py-2">
          <Navbars />
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}
export default Home;
