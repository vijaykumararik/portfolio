import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {  SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Reactjs Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">vijaykumar arikatti</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use create web applicatons as per the the clients requirments and i love to do
          code with creativeness so that it will reach clients expectations and like more 
          intrested in front end developemt and very exaited to work with new technology
        </p>
      </div>
      <div className="flex  flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <SiJavascript /> 
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
            <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner