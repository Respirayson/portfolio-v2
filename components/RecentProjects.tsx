import { projects } from "@/data";
import React from "react";
import { AnimatedPinDemo } from "./ui/PinContainer";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 sm:px-48">
      <h1 className="heading text-purple">Projects</h1>
      <p className="text-slate-200 text-center mt-2 font-medium text-lg">I enjoy exploring ideas through creation.</p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-40 sm:mt-24 sm:gap-y-40 scale-105">
        {projects.map(({ id, title, des, img, iconLists, link, className }) => (
          <div
            key={id}
            className="sm:h-[20.5rem] h-[28rem] lg:min-h-[16.25rem] flex items-center justify-center sm:w-[320px] w-[50vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[400px] w-[80vw] overflow-hidden sm:h-[240px] h-[22vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-2xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className={`z-10 absolute bottom-0 rounded-2xl ${
                    className || ""
                  }`}
                />
              </div>
              <h1 className="font-bold sm:text-md text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-md text-sm text-purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-1" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
