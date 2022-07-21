import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [hidden, setHiden] = React.useState(true);
  return (
    <div className="sticky top-0 w-full h-[50px] md:h-[60px] z-10 bg-tvmblack drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 to-blue-700 mr-4 sm:text-3xl ml-4">
            Tenvium
          </h1>
        </div>
        <div className="max-w-[70%]">
          <ul className="hidden md:flex">
            <li className="text-stone-100">Home</li>
            <li className="text-stone-100">Developer</li>
            <li className="text-stone-100">Whitepaper</li>
            <li className="text-stone-100">TVM Labs</li>
            <li className="text-stone-100">Community</li>
          </ul>
        </div>
        <div className="hidden md:flex mr-4 space-x-6 ">
          <button className="px-5 py-2 flex rounded-xl items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:to-white font-bold text-white">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="M16 6H3.5v-.5l11-.88v.88H16V4c0-1.1-.891-1.872-1.979-1.717L3.98 3.717C2.891 3.873 2 4.9 2 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001z"/></svg>
            Wallet
          </button>    
        </div>
        <div
          className="md:hidden cursor-pointer p-1 hover:bg-indigo-200 mr-2"
          onClick={() => setHiden(!hidden)}
        >
          {hidden ? <MenuIcon className="w-5 text-blue-600" /> : <XIcon className="w-5 text-blue-600" />}
        </div>
      </div>
      <ul
        className={hidden ? "hidden" : "absolute border-2 border-blue-600/50  bg-slate-900 w-300 top-0 right-0 my-12 mr-6 rounded-2xl px-[5px]"}
      >
        <li className="text-gray-100 hover:text-blue-600 py-2">Home</li>
        <li className="text-gray-100 hover:text-blue-600 py-2">Developer</li>
        <li className="text-gray-100 hover:text-blue-600 py-2">Whitepaper</li>
        <li className="text-gray-100 hover:text-blue-600 py-2">TVM Labs</li>
        <li className="text-gray-100 hover:text-blue-600 py-2">Community</li>
        <div className="flex flex-col items-center m-[1rem]">
          <button className="px-5 py-2 flex rounded-xl items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:to-white font-bold text-white">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="M16 6H3.5v-.5l11-.88v.88H16V4c0-1.1-.891-1.872-1.979-1.717L3.98 3.717C2.891 3.873 2 4.9 2 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001z"/></svg>
            Wallet
          </button>  
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
