"use client";

import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[35rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl font-bold text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          style={{ color: "#e4ecff" }}
          className="justify-center text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Journey</span> thus far
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="New-Found Passion"
          icon={<AceternityIcon order="Self-Learning" />}
          description="Back in 2021, I decided to try my hand at creating custom telegram bots and tumbled head first into the rabbit hole of coding and web development. Since then, I've been continuously learning and improving my skills through online courses and bootcamps. I've built a few projects along the way, and I'm always looking for new opportunities to learn and grow."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            dotSize={2}
          />
        </Card>
        <Card
          title="Hackathons & Experience"
          icon={<AceternityIcon order="NUS & Internships" />}
          description="I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. I've also engaged in hackathons and school projects, where I've had the opportunity to work on a variety of projects, from web development to machine learning. I've learned to work with a team, manage my time effectively, and deliver results under pressure."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Free time & Hobbies"
          icon={<AceternityIcon order="Outside of Work" />}
          description="When I'm not at my computer, I'm usually out and about, exploring new places, trying new foods, or just enjoying the great outdoors. I'm also a huge fan of music and movies, and I love to spend my free time watching movies or listening to music. I'm always looking for new hobbies to try out, and I'm always up for a new adventure."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;
