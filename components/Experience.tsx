import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 px-2 sm:px-40" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ thumbnail, id, title, desc }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 !cursor-pointer"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-8 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="md:w-20 w-16"
              />
              <div className="lg:ms-1">
                <h1 className="text-start text-md md:text-lg font-bold">
                  {title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold text-sm">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
