export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm a Full Stack Developer based in Singapore",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I love building things for the web",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a C/E-TRM system",
    description: "What I'm working on now",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to collaborate on exciting projects?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Metaverse Mayhem",
    des: "A responsive full-stack web3 application allowing users to play, collect and trade NFT cards.",
    img: "/metaverse-mayhem.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://metaverse-mayhem.vercel.app",
    className: "rotate-3 scale-90 translate-y-3",
  },
  {
    id: 2,
    title: "Biometrics System - Project Sabai",
    des: "Website to streamline clinic workflow and bring healthcare to underprivilged in Cambodia.",
    img: "/project-sabai.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://projectsabai.netlify.app",
    className: "rotate-3 scale-90 translate-y-3",
  },
  {
    id: 3,
    title: "NUS Computing Club Website",
    des: "Website for NUS School of Computing students to access resources, events and announcements.",
    img: "/nuscomputing.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://nuscomputing.com",
    className: "rotate-3 scale-90 translate-y-3",
  },
  {
    id: 4,
    title: "LifeHack 2024",
    des: "Official website for LifeHack 2024, a hackathon to solve real-world problems with technology.",
    img: "/lifehack-website.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://lifehack.nuscomputing.com",
    className: "rotate-3 scale-90 translate-y-3",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern - CoreTRM",
    desc: "Assisted in the development of a C/ETRM system using .NET 8, MSSQL and Javascript, enhancing interactivity",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teaching Assistant - Software Engineering",
    desc: "Taught students the fundamentals of software engineering, including UML Diagrams, SDLC, and more.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Tech Lead - NUS Computing Club",
    desc: "Led a team of developers to build websites for NUS Computing Club, using React, TypeScript and TailwindCSS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Quant Developer - NUS Fintech Society",
    desc: "Developed trading algorithms and strategies for the NUS Fintech Society, using Python and Pandas.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Respirayson",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://linkedin.com/in/rayson-yeap"
  },
];
