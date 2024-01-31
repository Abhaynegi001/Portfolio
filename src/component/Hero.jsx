import React from "react";

function Hero() {
  return (
    <>
      <div className="flex">
        <div className="text-[#8B8A91] bg-[#1C1B23] hidden lg:flex lg:m-4 rounded-3xl text-3xl">
          <nav>
            <ul className="px-5 font-bold py-6">
              <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="px-3 fa-solid fa-house"></i>Home{" "}
              </li>
              <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="px-3 fa-solid fa-fire-flame-curved"></i>Trending
              </li>
              <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="px-3 fa-solid fa-code"></i>Snippets
              </li>
              <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="px-3 fa-solid fa-video"></i>Videos
              </li>
            </ul>
            <p className="text-4xl px-3 font-bold">Socials</p>
            <ul className="px-5 font-bold py-6">
            <a href="https://instagram.com/abhaynegi290?igshid=OGQ5ZDc2ODK2ZA==" target="_blank">
            <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="text-[#B5179E] px-3 fa-brands fa-instagram"></i>
                Instagram
              </li>
            </a>
            <a href="https://github.com/Abhaynegi001" target="_blank">
            <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="text-[#288D81] px-3 fa-brands fa-github"></i>Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/abhay-negi-0319172b1?utm_source=share&utm_campagin=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <li className="py-4 hover:text-4xl ease-in-out duration-300 cursor-pointer">
                <i class="text-[#0277B5] px-3 fa-brands fa-linkedin"></i>
                LinkedIn
              </li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="bg-gradient-to-r from-[#141631] to-[#424A71] text-white p-5 md:flex md:flex-row-reverse m-3 rounded-3xl">
          <div className="mb-3 md:mx-7 md:pt-20">
            <img src="portfolio\src\Images\me.jpg" className="size-40 rounded-full md:size-80"  alt="code red"/>
          </div>
          <div className="md:w-[35rem]">
            <button className="font-bold  text-2xl border-2 border-white p-2 md:text-3xl md:my-5">
              Welcome to my profile
            </button>
            <h1 className="text-4xl py-4 font-bold md:text-5xl md:py-5=6">
              Hi! I'm Abhay Web devloper
            </h1>
            <p className="text-2xl md:text-4xl leading-9 md:leading-snug md:mt-5 ">
              Hello everyone, my name is Abhay Negi, and I am a passionate BCA
              student. I have immersed myself in the vast and dynamic world of
              full stack web development.with a fervent drive to create stunning
              and functional website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

