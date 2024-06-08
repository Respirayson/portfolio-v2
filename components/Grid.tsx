import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
import { TracingBeam } from "./ui/tracing-beam";

const Grid = () => {
  return (
    <section id="about" className="px-2 py-20">
      <h1 className="heading relative pt-8 text-purple">
        About Me
      </h1>
      <p className="relative mt-2 text-slate-300 font-medium text-center pb-10 text-lg">
        Just a quick glimpse.
      </p>
      <TracingBeam>
        <BentoGrid className="scale-90">
          {gridItems.map(
            (
              {
                id,
                title,
                description,
                className,
                img,
                imgClassName,
                titleClassName,
                spareImg,
              },
              _
            ) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </BentoGrid>
      </TracingBeam>
    </section>
  );
};

export default Grid;
