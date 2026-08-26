import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmarkFlag,
  faPaintBrush,
  faEnvelope,
  faCircleChevronRight,
  faUpRightFromSquare,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import SectionTitle from "../components/sectiontitle";
import Tag from "../components/tag";
import ProjectCard from "../components/projectcard";
import Button from "../components/button";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-1 w-full flex-col items-center ">
      <div className="relative flex flex-col items-center justify-center  bg-radial from-light-purple from-25% to-light-blue pt-28 pb-15 w-full overflow-hidden">
        <Image
          src="/Swirl.svg"
          alt="Decorative"
          width={650}
          height={100}
          className="z-0 absolute top-0 right-0"
        />
        <Image
          src="/Swirl.svg"
          alt="Decorative"
          width={650}
          height={200}
          className="z-0 absolute bottom-[-120] left-[-80] rotate-180 "
        />

        <div className="flex transition duration-300 ease-in-out hover:scale-110">
          <Image
            src="/PetalSignature.svg"
            alt="Decorative"
            width={150}
            height={150}
            className=""
          />
          <h1 className="text-white z-10 flex justify-center flex-col flex-none">
            <span className="inline-block  text-6xl md:text-7xl ">Medina</span>
            <span className="ml-10 text-3xl md:text-5xl">Fitri Maulida</span>
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <div className="font-ssh font-light border-2 border-white rounded-xl px-15 py-0.5 text-white">
            Web Dev
          </div>
          <div className="font-ssh font-light border-2 border-white rounded-xl px-15 py-0.5 text-white">
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

        <div className="max-w-5xl 2xl:max-w-7xl flex-col items-left justify-center flex gap-6 pb-10 px-3 pt-7  flex-auto">
          {/* <SectionTitle title="Project Detail"></SectionTitle> */}
          {/* <div className="flex sm:flex-row flex-col items-center justify-center gap-10 h-fit border-1 border-light-border bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:scale-102">
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
                Hi! I&apos;m Medina, a CS fresh graduate from IPB University.
                I&apos;ve always enjoyed the problem-solving and the craft of
                turning a design into something that actually works and serves
                purpose beyond just being nice to look at. I tend to gravitate
                towards works where aesthetic and function meet, like frontend
                and UI design.
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <h4 className="font-medium">Techs & Tools</h4>
                <div className="flex flex-row flex-wrap gap-1.5">
                  <Tag text="Laravel" img_src="/Logos/Laravel.svg"></Tag>
                  <Tag text="Next.js" img_src="/Logos/NextJS.svg"></Tag>
                  <Tag text="Bootstrap" img_src="/Logos/Bootstrap.svg"></Tag>
                  <Tag text="PostgreSQL" img_src="/Logos/PostgreSQL.png"></Tag>
                  <Tag text="PHP" img_src="/Logos/PHP.svg" logo_wide></Tag>
                  <Tag text="Figma" img_src="/Logos/Figma2.svg"></Tag>
                  <Tag text="MySQL" img_src="/Logos/MySQLL.png" logo_wide></Tag>
                  <Tag text="Typescript" img_src="/Logos/TypeScriptt.svg"></Tag>
                  <Tag text="Vercel" img_src="/Logos/Vercel.svg"></Tag>
                  <Tag text="Javascript" img_src="/Logos/Javascriptt.png"></Tag>
                  <Tag text="Tailwind" img_src="/Logos/Tailwind.svg"></Tag>
                </div>
              </div>
            </div>
          </div> */}
          <span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mr-3"
            ></FontAwesomeIcon>
            Back to Projects
          </span>
          <div className=" w-full h-fit bg-white p-10 text-dark flex sm:flex-row flex-col items-center justify-center gap-10 border-1 border-light-border bg-white rounded-xl shadow-md p-8 size-auto">
            <div className="flex flex-col gap-8 h-full">
              {/* Kiri */}
              <div className="flex flex-col">
                <div>
                  <span className="font-ssh font-medium">2025 - 2026</span>
                  <h2 className="font-medium">Toll Road Asset Dashboard</h2>
                  <div>
                    <span className="font-ssh font-regular">
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="text-light-purple mr-2"
                      ></FontAwesomeIcon>
                      Demo Video
                    </span>
                  </div>
                </div>
                <div className="mt-4 bg-black aspect-4/2 object-cover w-full rounded-lg"></div>
                <div className="mt-4 flex flex-col gap-1">
                  <h4 className="font-medium">Techs & Tools</h4>
                  <div className="flex flex-row flex-wrap gap-1.5">
                    <Tag text="Laravel" img_src="/Logos/Laravel.svg"></Tag>
                    <Tag text="Next.js" img_src="/Logos/NextJS.svg"></Tag>
                    <Tag text="Bootstrap" img_src="/Logos/Bootstrap.svg"></Tag>
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
              {/* Kanan */}
              <div className="h-full flex-col overflow-y-auto">
                <span className="flex gap-4 pb-3">
                  <Image
                    src="/PetalIconSmall.svg"
                    alt="Decorative Icon"
                    width={16}
                    height={16}
                  />
                  <h3 className="text-lg">Overview</h3>
                </span>

                <p className="text-sm mb-2">
                  For my undergrad thesis (skripsi), I designed and built a
                  dashboard prototype integrated into an existing Road Asset
                  Management System (RAMS), which has been previously developed
                  by multiple people before me.
                </p>

                <p className="text-sm mb-2">
                  This dashboard is meant to take in sheets and sheets of
                  structurally complex data from road ledger (leger jalan)
                  physical documents, and turn it into digestible
                  visualizations, helping stakeholders (especially Toll Road
                  Business Entities/Badan Usaha Jalan Tol) track and understand
                  better toll road asset condition over time.
                </p>

                <hr className="my-3 text-light-border"></hr>

                <span className="flex gap-4 pb-3">
                  <Image
                    src="/PetalIconSmall.svg"
                    alt="Decorative Icon"
                    width={16}
                    height={16}
                  />
                  <h3 className="text-lg">Key Features</h3>
                </span>

                <ul className="text-sm list-disc ml-5 flex flex-col gap-2">
                  <li>
                    The data is organized by toll road and year, since road
                    ledger data of a toll road is expected to be updated at
                    least every 5 years to track changes.
                  </li>
                  <li>
                    Four levels of granularity from page to page: toll road list
                    → ledger version overview → mainroad summary → mainroad
                    segment detail.{" "}
                  </li>
                  <li>
                    Mainroad data summary consists of mixed visualizations, such
                    as cards, tables, and graphic, customized to characteristics
                    of each data category.
                  </li>
                  <li>
                    Mainroad segment detail has an edit mode interface to
                    manually correct or adjust data field values on the segment,
                    since the data is auto-generated from GeoJSON files via a
                    separate feature.
                  </li>
                </ul>

                <hr className="my-3 text-light-border"></hr>

                <span className="flex gap-4 pb-3">
                  <Image
                    src="/PetalIconSmall.svg"
                    alt="Decorative Icon"
                    width={16}
                    height={16}
                  />
                  <h3 className="text-lg">My Process</h3>
                </span>

                <p className="text-sm mb-2">
                  Although I had guidance from my advisor, it was mostly general
                  direction and occasional pointers on what to avoid, rather
                  than specific answers. And on top of that, I had no direct
                  access to stakeholders. So I started by doing my own research,
                  going through toll road ledger samples, government
                  regulations, and official guidelines to understand the data
                  and the people who&apos;d be using it. From there, I studied
                  the existing system&apos;s codebase and database to figure out
                  how to build on top of it without disrupting what was already
                  working. I also had to work out everything else myself, from
                  page flows, wireframing, visualization choices, API endpoints,
                  database adjustments, to frontend-backend implementation.
                </p>
                <p className="text-sm mb-2">
                  This project taught me the hard way how to work within the
                  boundaries of an existing system, compared to earlier projects
                  where I had way more room for flexibility. At the same time,
                  having no user input and a fairly niche subject pushed me to
                  be more self-directed with design decisions. I came out of it
                  with a much stronger instinct for working within constraints
                  and making decisions with incomplete information.
                </p>
              </div>
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
              className="z-0 absolute top-0 right-[-50]"
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
                <Button text="LinkedIn" img_src="/Logos/LinkedIn.png"></Button>
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
  );
}
