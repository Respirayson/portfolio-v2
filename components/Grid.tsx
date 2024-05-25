import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
import { TracingBeam } from "./ui/tracing-beam";

const Grid = () => {
  return (
    <section id="about" className="px-2">
      <h1 className="heading relative pb-20 pt-8">
        A little more <span className="text-purple">about me</span>
      </h1>
      <TracingBeam>
        <BentoGrid>
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
