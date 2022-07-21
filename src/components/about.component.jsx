import React from "react";

const About = () => {
  return (
    <div className="w-full my-[18rem] px-10 ">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center  ">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 ">
            Trusted by Developers Around The World
          </h2>
          <p className="text-lg py-12 text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            inventore exercitationem, veniam fugiat optio ipsam ab cupiditate ex
            eligendi aut dolores placeat. Doloribus expedita deserunt quam aut
            dolore rem ab?
          </p>
        </div>
        <div class="lg:flex items-center justify-between my-10">
            <div class="lg:w-1/2 w-full">
                <h1 role="heading" class="md:text-5xl text-4xl leading-10 mt-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Why Tenvium Network</h1>
                <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-200">We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think</p>
            </div>
            <div class="xl:w-1/2 lg:w-7/12 static w-full lg:mt-0 mt-12 md:px-8" role="list">
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 static z-30">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">Secure</h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">FREE</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore exercitationem</p>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg mt-3 flex static z-30">
                    <div class="w-2.5 h-auto bg-blue-700 rounded-tl-md rounded-bl-md"></div>
                    <div class="w-full p-8">
                        <div class="md:flex items-center justify-between">
                            <h2 class="text-2xl font-semibold leading-6 text-gray-800">High Performance</h2>
                            <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"><span class="font-normal text-base">/mo</span></p>
                        </div>
                        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore exercitationem</p>
                    </div>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 static z-30 mt-7">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">EVM Compatible</h2>
                        <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"><span class="font-normal text-base">/mo</span></p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore exercitationem</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
