import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmarkFlag,
  faPaintBrush,
  faEnvelope,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import SectionTitle from "./components/sectiontitle";
import Tag from "./components/tag";
import ProjectCard from "./components/projectcard";
import Button from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col flex-1 items-center justify-center w-full">
        <main className="flex flex-1 w-full flex-col items-center ">
          <div className="relative flex flex-col items-center justify-center  bg-radial from-light-purple from-25% to-light-blue pt-28 pb-15 w-full overflow-hidden">
            <Image
              src="/Swirl.svg"
              alt="Decorative"
              width={650}
              height={100}
              className="z-0 absolute -top-10 -right-30 xl:-top-10 xl:-right-10 w-120 xl:w-[650px] opacity-70"
            />
            <Image
              src="/Swirl.svg"
              alt="Decorative"
              width={650}
              height={200}
              className="z-0 absolute -bottom-40 -left-20 w-130 xl:w-[650px] rotate-180 opacity-70"
            />

            <div className="flex transition duration-300 ease-in-out hover:scale-110 z-20">
              <Image
                src="/PetalSignature.svg"
                alt="Decorative"
                width={150}
                height={150}
                className="w-30 md:w-40"
              />
              <h1 className="text-white z-10 flex justify-center flex-col flex-none">
                <span className="inline-block  text-6xl md:text-7xl ">
                  Medina
                </span>
                <span className="ml-10 text-4xl md:text-5xl">
                  Fitri Maulida
                </span>
              </h1>
            </div>
            <div className="relative left-6 md:left-10 flex flex-row gap-3">
              <div className="font-ssh font-light border-2 border-white rounded-xl px-10 md:px-15 py-0.5 text-white">
                Web Dev
              </div>
              <div className="font-ssh font-light border-2 border-white rounded-xl px-10 md:px-15 py-0.5 text-white">
                UI Design
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center xl:justify-between gap-20 ">
            <div className="p-1 2xl:max-w-55 w-full max-w-45 hidden xl:block">
              <div className="bg-[url('/Patterns.svg')] z-[-999] bg-contain 2xl:bg-cover bg-repeat-y h-full w-auto"></div>
              {/* <Image
                src="/Patterns.svg"
                alt="Decorative"
                width={170}
                height={100}
                className="z-[-999] object-cover  xl:w-full"
              /> */}
            </div>

            <div className="max-w-5xl 2xl:max-w-7xl flex-col items-center justify-center flex gap-6 pb-10 px-3 pt-7  flex-auto">
              <SectionTitle title="About Me"></SectionTitle>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-10 h-fit border-1 border-light-border bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:scale-102">
                <div className="flex-none">
                  <Image
                    src="/Portrait.png"
                    alt="Decorative"
                    width={175}
                    height={175}
                    className="flex-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-sm">
                    Hi! I&apos;m Medina, a CS fresh graduate from IPB
                    University. I&apos;ve always enjoyed the problem-solving and
                    the craft of turning a design into something that actually
                    works and serves purpose beyond just being nice to look at.
                    I tend to gravitate towards works where aesthetic and
                    function meet, like frontend and UI design.
                  </p>
                  <div className="mt-4 flex flex-col gap-1">
                    <h4 className="font-medium">Techs & Tools</h4>
                    <div className="flex flex-row flex-wrap gap-1.5">
                      <Tag text="Laravel" img_src="/Logos/Laravel.svg"></Tag>
                      <Tag text="Next.js" img_src="/Logos/NextJS.svg"></Tag>
                      <Tag
                        text="Bootstrap"
                        img_src="/Logos/Bootstrap.svg"
                      ></Tag>
                      <Tag
                        text="PostgreSQL"
                        img_src="/Logos/PostgreSQL.png"
                      ></Tag>
                      <Tag text="PHP" img_src="/Logos/PHP.svg" logo_wide></Tag>
                      <Tag text="Figma" img_src="/Logos/Figma2.svg"></Tag>
                      <Tag
                        text="MySQL"
                        img_src="/Logos/MySQLL.png"
                        logo_wide
                      ></Tag>
                      <Tag
                        text="Typescript"
                        img_src="/Logos/TypeScriptt.svg"
                      ></Tag>
                      <Tag text="Vercel" img_src="/Logos/Vercel.svg"></Tag>
                      <Tag
                        text="Javascript"
                        img_src="/Logos/Javascriptt.png"
                      ></Tag>
                      <Tag text="Tailwind" img_src="/Logos/Tailwind.svg"></Tag>
                    </div>
                  </div>
                </div>
              </div>

              <SectionTitle title="My Projects"></SectionTitle>
              <div className="flex flex-wrap gap-3 items-center">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
              </div>

              <SectionTitle title="Other Experiences"></SectionTitle>
              <div className="flex flex-wrap gap-3 items-center items-stretch">
                <div className="flex flex-col md:flex-1 flex-auto w-fit md:max-w-126 xl:max-w-full gap-5 border-1 border-light-border bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:scale-102">
                  <div className="bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120% p-3 w-fit">
                    <FontAwesomeIcon
                      icon={faLandmarkFlag}
                      className="text-white text-4xl"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-ssh text-sm font-medium">
                      2025 & 2026
                    </span>
                    <h3 className="font-light text-md">
                      E-Government IT Architecture Research
                    </h3>
                    <p className="text-xs">
                      I spent a total of almost a year working as a research
                      assistant for e-government IT architecture assessments in
                      Indonesia, following the national SPBE (Sistem
                      Pemerintahan Berbasis Elektronik) framework. Along with my
                      team members, we evaluated business processes, services,
                      data, applications, infrastructure, and cybersecurity
                      within a government institution.
                    </p>
                    {/* <p className="text-xs">
                      For Kota Bogor&apos;s government, we gathered data of the
                      architecture&apos;s existing state through FGDs with 36
                      local government units, analyzed gaps against past
                      targets, and helped synthesize a 2025-2030 roadmap across
                      three delivered report volumes. For KPU RI, we applied the
                      same framework at a national level. Both projects taught
                      me how to turn messy, real-world stakeholder input into
                      structured findings decision-makers could actually act on.
                    </p> */}
                   
                  </div>
                   <button className="mt-4 group relative  bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120%  w-fit">
                      <Link href="/projects">
                        <div className="absolute inset-0 bg-radial from-[#E196EB] from-0% to-[#C5EDF7] to-90% opacity-0 rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                        <div className="relative z-10 flex items-center gap-1 py-2 px-4">
                          {" "}
                          <span className="text-white font-semibold font-ssh">
                            {" "}
                            Read more{" "}
                          </span>
                          <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            className="text-white"
                          />
                        </div>
                      </Link>
                    </button>
                </div>
                <div className="flex  flex-col md:flex-1 flex-auto w-fit md:max-w-126 xl:max-w-full gap-5 border-1 border-light-border bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:scale-102">
                  <div className="bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120% p-3 w-fit">
                    <FontAwesomeIcon
                      icon={faPaintBrush}
                      className="text-white text-4xl"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-ssh text-sm font-medium">
                      2021 - 2023
                    </span>
                    <h3 className="font-light text-md">
                      Graphic Design Staff in Campus Committees/Organizations
                    </h3>
                    <p className="text-xs">
                      Across several campus organizations and annual event
                      committees, I contributed as a graphic design staff. I
                      produced Instagram content, posters, banners, vector
                      assets, merchandise stickers, and certificates.
                    </p>
                    {/* <p className="text-xs">
                      This included developing visual identities and content
                      templates from scratch, and working within team design
                      workflows in both Canva and Figma. These experiences were
                      also the first time I used Figma, initially for graphic
                      design, before eventually transitioning into UI design.
                    </p> */}
                    
                  </div>
                  <button className="mt-4 group relative  bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120%  w-fit">
                      <Link href="/projects">
                        <div className="absolute inset-0 bg-radial from-[#E196EB] from-0% to-[#C5EDF7] to-90% opacity-0 rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                        <div className="relative z-10 flex items-center gap-1 py-2 px-4">
                          {" "}
                          <span className="text-white font-semibold font-ssh">
                            {" "}
                            Read more{" "}
                          </span>
                          <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            className="text-white"
                          />
                        </div>
                      </Link>
                    </button>
                </div>
              </div>
              <SectionTitle title="Contact Me"></SectionTitle>
              <div
                className="relative w-full px-15 py-20 bg-radial rounded-3xl
          from-light-purple from-20% to-[#C5EDF7] to-100% p-3 shadow-md p-8
          transition duration-300 hover:shadow-xl hover:scale-102 overflow-hidden
          flex-initial"
              >
                <Image
                  src="/Swirl.svg"
                  alt="Decorative"
                  width={800}
                  height={100}
                  className="z-0 absolute w-800 top-0 -right-30 md:top-0 md:right-[-50] md:w-180 opacity-70"
                />
                <div className="flex flex-col gap-8 ">
                  <span className="font-ssh text-white text-6xl font-bold z-100">
                    Let&apos;s Connect!
                  </span>
                  <div className="flex gap-4">
                    <div className="z-100 shadow-sm bg-white py-2 px-5 inline-flex items-center gap-3 rounded-xl hover:bg-light-hover  hover:shadow-none">
                      <div className="flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-light-purple"
                        />
                      </div>
                      <span className="text-sm">Email</span>
                    </div>
                    <Button
                      text="LinkedIn"
                      img_src="/Logos/LinkedIn.png"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 2xl:max-w-55 w-full max-w-45 hidden xl:block">
              <div className="bg-[url('/Patterns.svg')] z-[-999] bg-contain 2xl:bg-cover bg-repeat-y h-full w-auto"></div>
              {/* <Image
                src="/Patterns.svg"
                alt="Decorative"
                width={170}
                height={100}
                className="z-[-999] object-cover xl:w-full"
              /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
