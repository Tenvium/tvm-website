import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Tokenomics = () => {
  return (
    <div className="w-full text-white ">
      <div className="w-full h-[550px]   absolute mix-blend-overlay"></div>

      <div className="container max-w-[1240px] mx-auto py-12 ">
        <div className="text-center py-6 px-12 ">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Tokenomics</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 relative mx-10 ">
        <div className="bg-slate-900 text-slate-900 m-10 py-8 px-4 rounded-full shadow-2xl">
          <div>

          </div>
        </div>
        <div className=" text-blue-600 m-10 py-10 px-6  rounded-xl shadow-2xl">
          <span className="uppercase px-3 py-1 bg-indigo-200 text-blue-900 rounded-2xl text-sm">
            Token Alocation
          </span>
          <p className="py-6 text-slate-500 relative ">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div>
            <p className="flex py-3 text-md">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-md">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-md">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-md">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
            <p className="flex py-3 text-md">
              <CheckIcon className="w-4 mr-1 text-green-600" /> Lorem, ipsum
              dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
