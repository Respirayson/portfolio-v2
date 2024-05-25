import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="z-50">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vh] rotate-90"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my Portfolio Website
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, my name is Rayson"
          />

          <HeroHighlight className="text-center mb-4 md:text-lg text-sm lg:text-2xl">
            I&apos;m a Year 3 Computer Science student and aspiring{" "}
            <Highlight className="text-white">
              <FlipWords
                words={[
                  "software engineer",
                  "web developer",
                  "outdoor explorer",
                  "puzzle enthusiast"
                ]}
                duration={4000}
              />
            </Highlight>
            <br />
            from NUS, Singapore.
          </HeroHighlight>

          <a href="#projects">
            <HoverBorderGradient
              as="button"
              containerClassName="rounded-full mt-4"
              className="bg-black-100 text-white flex items-center space-x-2"
            >
              <span className="flex flex-row items-center px-1 justify-center font-medium text-white">
                Show my Work
                <FaLocationArrow className="ml-2" />
              </span>
            </HoverBorderGradient>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
