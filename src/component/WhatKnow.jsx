import React from "react";

function WhatKnow({ title, l1, l2, l3, l4, l5, l6 }) {
  return (
    <div className="md:flex md:flex-wrap md:text-xl tracking-widest">
      <div className="bg-[#1C1B23] text-white m-4 p-4 rounded-xl md:w-[20rem]">
        <h1 className="text-3xl">Frontend</h1>
        <div className="mt-5 flex flex-wrap">
          <span className="bg-black p-3 m-2 rounded-lg border border-blue-700">
            HTML
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-red-700">
            CSS
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-green-700">
            Javascript
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-yellow-600">
            React Js
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-pink-700">
            Tailwind
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-purple-500">
            Bootstrap
          </span>
        </div>
      </div>
      <div className="bg-[#1C1B23] text-white m-3 p-4 rounded-xl">
        <h1 className="text-3xl">Backend</h1>
        <div className="mt-5 flex flex-wrap">
          <span className="bg-black p-3 m-2 rounded-lg border border-blue-700">
            Node Js
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-red-700">
            Express Js
          </span>
        </div>
      </div>
      <div className="bg-[#1C1B23] text-white m-3 p-4 rounded-xl">
        <h1 className="text-3xl">Database</h1>
        <div className="mt-5 flex flex-wrap">
          <span className="bg-black p-3 m-2 rounded-lg border border-purple-500">
            MongoDB
          </span>
        </div>
      </div>
      <div className="bg-[#1C1B23] text-white m-3 p-4 rounded-xl md:w-[25rem] lg:w-[20rem]">
        <h1 className="text-3xl">Languages , Tools</h1>
        <div className="mt-5 flex flex-wrap">
          <span className="bg-black p-3 m-2 rounded-lg border border-blue-700">
            C
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-red-700">
            C++
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-green-700">
            Python
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-yellow-600">
            DSA
          </span>
          <span className="bg-black p-3 m-2 rounded-lg border border-purple-500">
            Git and Github
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhatKnow;
