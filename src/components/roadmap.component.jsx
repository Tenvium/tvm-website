import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import roadmapImg from "../assets/defi.jpg";

const Roadmap = () => {
  return (
    <div className="w-full text-white ">
      <div className="w-full h-[1090px] bg-slate-900/90 absolute bg-blend-darken">
        <img
          src={roadmapImg}
          alt="Roadmap Img"
          srcSet=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1240px] text-white mx-auto relative px-10">

        <div className="container max-w-[1240px] mx-auto py-12 ">
          <div className="text-center py-4  text-slate-300 px-10 -mb-20 md:-mb-12 ">
          <h2 className="text-4xl pt-2 font-bold text-slate-100 text-center">
             <strong className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Roadmap</strong>
          </h2>
          </div>
        </div>
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-5">
        <div className="border-l-2 mt-10">
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center shadow-lg shadow-blue-500/50 px-6 py-4 bg-slate-900 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-slate-900 border-2 border-blue-600 absolute shadow-lg shadow-blue-500/50 -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-blue-800 shadow-lg shadow-blue-500/50 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg uppercase font-bold text-blue-600">2022 - Q3</h1>
              <li className="py-0">Build a RnD Team</li>
              <li className="py-0">Release Official Website</li>              
              <li className="py-0">Launch a Token on BSC Network</li>
              <li className="py-0">Marketing Campaign</li>
              <li className="py-0">Release TVM DEX Swap & NFT Marketplace</li>
            </div>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center shadow-lg shadow-blue-500/50 px-6 py-4 bg-slate-900 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-slate-900 border-2 border-blue-600 absolute shadow-lg shadow-blue-500/50 -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-blue-800 shadow-lg shadow-blue-500/50 absolute -left-10 z-0"></div>

            <div className="flex-auto">
            <h1 className="text-lg uppercase font-bold text-blue-600">2022 - Q4</h1>
              <li className="py-0">Private Testnet TVM Chain</li>
              <li className="py-0">Block Explorer Development</li>
              <li className="py-0">Building Cross-Chain Bridge Web</li>              
              <li className="py-0">Launch Public Testnet</li>
              <li className="py-0">Apply to CMC and CG</li>
            </div>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center shadow-lg shadow-blue-500/50 px-6 py-4 bg-slate-900 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-slate-900 border-2 border-blue-600 absolute shadow-lg shadow-blue-500/50 -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-blue-800 shadow-lg shadow-blue-500/50 absolute -left-10 z-0"></div>

            <div className="flex-auto">
            <h1 className="text-lg uppercase font-bold text-blue-600">2023 - Q1</h1>
              <li className="py-0">Marketing with Big Influencer Crypto</li>
              <li className="py-0">Launch Staking Platform</li>
              <li className="py-0">Validator Programs</li>
              <li className="py-0">Launch Mainnet 1.0</li>              
              <li className="py-0">Release Official Wallet</li>
            </div>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center shadow-lg shadow-blue-500/50 px-6 py-4 bg-slate-900 text-white rounded-xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-slate-900 border-2 border-blue-600 absolute shadow-lg shadow-blue-500/50 -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-blue-800 shadow-lg shadow-blue-500/50 absolute -left-10 z-0"></div>

            <div className="flex-auto">
            <h1 className="text-lg uppercase font-bold text-blue-600">2023 - Q2</h1>
              <li className="py-0">Partnership Programs</li>
              <li className="py-0">Release Official Wallet</li>
              <li className="py-0">Mainnet 2.0 - Application of new consensus algorithms</li>              
              <li className="py-0">Current blockchain generations bridge: ETH, HECO, AVAX, etc.</li>
              <li className="py-0">Roadmap 2.0</li>
            </div>
          </div>

        </div>
        </div>
    
      </div>

    </div>
  );
};

export default Roadmap;
