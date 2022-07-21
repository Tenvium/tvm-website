import React from "react";
import {
  CurrencyDollarIcon,
  CashIcon,
  ChartBarIcon
} from "@heroicons/react/solid";
import blocks from "../assets/blocks.png";

const Hero = () => {
  return (
    <div className="max-w-[100vw] pb-8 bg-tvmblack flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto my-10 px-5 md:px-10">
        <div className="flex flex-col flex-wrap gap-3 items-center md:items-start w-full px-2 justify-center ">
          <p className="text-2xl md:text-2xl text-neutral-100	font-medium">
            The Next Generation of Blockchain
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 uppercase">POSSIBILITY TO REALITY</h1>
          <p className=" text-md md:text-lg text-neutral-300">Secure, Fast and Support Multi-Chain Architecture</p>
          <div className="flex justify-center mt-2">
            <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:to-blue-700">
              <span class="relative text-sm text-white">Build Now</span>
              <div class="flex items-center -space-x-3 translate-x-3">
                <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>          
          </div>
        </div>
        <div className="flex justify-center ">
          <img
            className="w-[70%] md:w-full mt-10 md:mt-0 animate-pulse delay-500" 
            src={blocks}
            alt="/"
            srcSet=""
          />
        </div>
      </div>
      <div className="container max-w-[100vw] text-center m-auto shadow-md shadow-sky-600 flex flex-col items-center justify-center bg-slate-900 rounded-lg -mb-[15rem] md:-mb-[10rem] my-[5rem] md:my-[5rem] py-5 px-5 w-2/4 h-[50%] ">
        <p className="mb-4 text-xl font-bold text-white uppercase">Tenvium Network</p>
        <div className="flex gap-7 flex-wrap">
          <p className="flex justify-center items-center text-sm text-white ">
            <CurrencyDollarIcon className="h-8 text-blue-600 mr-2 ml-2" /> 
            <span className="text-blue-500 font-bold mr-1"> $NaN </span> Current Price
          </p>
          <p className="flex justify-center items-center text-sm text-white">
            <CashIcon className="h-8 text-blue-600 mr-2 ml-2" /> 
            <span className="text-blue-500 font-bold mr-1"> $NaN </span> Market Cap
          </p>
          <p className="flex justify-center items-center text-sm text-white">
            <ChartBarIcon className="h-8 text-blue-600 mr-2 ml-2" /> 
            <span className="text-blue-500 font-bold mr-1"> $NaN </span> Volume (24H)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
