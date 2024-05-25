"use client";

import React from "react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <div id="contact" className="mb-[80px] w-full pb-10 md:mb-5">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Feel free to <span className="text-purple">get in touch</span> with me
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
           I am excited to connect with like-minded individuals to discuss ideas and opportunities
        </p>
        <a href="mailto:rayson.yeap@u.nus.edu">
          <MagicButton
            title="Lets get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Rayson
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item, index) => (
            <div
              key={item.id}
              className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-50 bg-black-200 border-black-300 rounded-lg border"
            >
              <a href={item.href} target="_blank">
                <img src={item.img} alt={item.id} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
