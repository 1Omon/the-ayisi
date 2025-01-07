import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./project-card";

const links = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const interests = [
  {
    image: "/se.png",
    label: "Software Engineering",
  },
  {
    image: "/techpreneur.png",
    label: "Entrepreneurship",
  },
  {
    image: "/pm.png",
    label: "Product Management",
  },
  {
    image: "/market-strategy.png",
    label: "Marketing",
  },
];

const projects = [
  {
    title: "Virtual Healthcare Delivery System",
    summary: "",
    image: "",
    stack: [],
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <header className="w-4/5 mx-auto h-16 px-10 flex items-center justify-between sticky top-0 left-0 bg-background">
        <Image
          src={"/ayisi-logo.svg"}
          alt="mylogo"
          width={150}
          height={45}
          className="w-[125px] h-[40px]"
        />
        <div className="flex gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </header>
      <section
        id="home"
        className="w-full h-screen flex items-center justify-center gap-4"
      >
        <Image
          src={"/solo.svg"}
          alt="image"
          width={350}
          height={400}
          className=""
        />
        <span className="w-[35%] space-y-2">
          <h3 className="text-xl uppercase font-semibold text-accent">
            Hi there, I am Solomon from Ghana
          </h3>
          <h1 className="text-6xl font-extrabold leading-none">
            Can provide you with an unfair advantage right from the start!
          </h1>
          <p className="leading-tight">
            I have experience in software engineering, product management,
            marketing, and startup creation which also requires strategic
            planning and business development skillsets.
          </p>
          <button className="h-9 w-24 rounded-full bg-accent hover:bg-accent/90">
            Hire Me!
          </button>
        </span>
      </section>
      <section
        id="about"
        className="flex w-4/5 mx-auto h-[50vh] items-center justify-between gap-x-6"
      >
        <span className="w-1/2 space-y-2">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="">
            A Computer Science graduate with a passion for coding that began at
            age 16. Over the years, I've had the privilege of working on a
            variety of exciting projects across industries such as healthcare,
            real estate, and education. I take pride in contributing
            meaningfully to the success of every project I’m involved in, often
            stepping into a versatile generalist role to ensure team goals are
            met.
          </p>
          <button className="h-9 w-24 rounded-full bg-transparent hover:bg-white border border-white hover:text-accent hover:border-accent hover:border-2">
            Hire Me!
          </button>
        </span>
        <div className="w-1/3 h-[300px] grid grid-cols-2 gap-4 rounded-lg ">
          {interests.map((item, index) => (
            <div
              key={index}
              className="bg-foreground flex flex-col items-center justify-center gap-y-2"
            >
              <Image
                src={item.image}
                alt="image"
                width={45}
                height={45}
                className=""
              />
              <p className="text-sm font-bold text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="project" className="w-4/5 grid-cols-2 grid gap-6">
        <h3 className="text-2xl font-semibold">Exciting Project</h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
      <footer className="flex items-center justify-center px-10 bg-foreground p-2 text-accent">
        Ayisi Solomon Annan | Copyright @ {new Date().getFullYear()}
      </footer>
    </div>
  );
}
