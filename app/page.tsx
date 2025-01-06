import Image from "next/image";
import Link from "next/link";

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
    image: "/",
    label: "Software Engineering",
  },
  {
    image: "/",
    label: "Entrepreneurship",
  },
  {
    image: "",
    label: "Product Management",
  },
  {
    image: "/",
    label: "Systems",
  },
];
export default function Home() {
  return (
    <div className="bg-background">
      <div className="w-full h-16 px-20 flex items-center justify-between sticky top-0 left-0">
        <Image
          src={"/ayisi-logo.svg"}
          alt="mylogo"
          width={150}
          height={45}
          className="w-[125px] h-[40px]"
        />
        <div className="">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center gap-4">
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
      </div>
      <div className="flex w-3/5 mx-auto h-[70vh]">
        <span className="">
          <h3 className="text-xl font-semibold">About Me</h3>
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
        <div className="">
          {interests.map((item, index) => (
            <div key={index}>
              <Image
                src={item.image}
                alt="image"
                width={45}
                height={45}
                className=""
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
