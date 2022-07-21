import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import cyber from "../assets/cyber-bg.png";

const Validator = () => {

  return (
    <div className="w-full text-white ">
      <div className="w-full h-[550px]   absolute mix-blend-overlay"></div>

      <div className="container max-w-[1240px] mx-auto py-12 ">
        <div className="text-center py-6 px-12 ">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Join Waitlist for Public Validators</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 relative mx-10 ">
        <div className=" py-8 px-4 flex justify-center items-center snap-center ">
          <div>
          <img
            className="w-[70%] md:w-full animate-pulse delay-500 items-center ml-12 md:ml-0" 
            src={cyber}
            alt="/"
            srcSet=""
          />
          </div>
        </div>
        <div className=" text-blue-600 m-10 py-10 px-6  rounded-xl shadow-2xl">
          <span className="uppercase px-4 py-2 bg-indigo-200 text-blue-900 rounded-lg text-sm">
            Validators Program
          </span>
          <p className="py-6 text-slate-500 relative ">
           Join the TVM ecosystem with projects across DeFi, Web3, and NFTs. We support up to 50 active validators at a time on our network. If you are interested for becoming the new TVM, Lets fill out the form to enter the waitlist.          </p>
          <div>
            <p className="flex py-3 text-md">
            <form>
            <div class="bg-tvmb;ack px-10 py-8 rounded-xl w-full shadow-md shadow-blue-600 border border-blue-600">
              <div class="space-y-4">
                <h1 class="text-left text-2xl font-semibold text-blue-600">Register</h1>
                <div>
                  <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
                  <input type="text" class="bg-gray-300 px-4 py-2 outline-none rounded-md w-full" />
                </div>
                <div>
                  <label for="email" class="block mb-1 text-gray-600 font-semibold">Wallet Address</label>
                  <input type="text" class="bg-gray-300 px-4 py-2 outline-none rounded-md w-full" />
                </div>
              </div>
              <button class="mt-8 w-full bg-gradient-to-tr from-blue-600 to-blue-800 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Join Waitlist</button>
            </div>
          </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validator;
