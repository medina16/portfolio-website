export const dynamic = "force-dynamic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmarkFlag,
  faPaintBrush,
  faEnvelope,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import SectionTitle from "../(frontend)/components/sectiontitle";
import Tag from "../(frontend)/components/tag";
import ProjectCard from "../(frontend)/components/projectcard";
import Button from "../(frontend)/components/button";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

import { getPayload } from "payload";
import config from "@/payload.config";
import ContactInfo from "./components/contact";

export default async function Home() {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: 6,
    sort: "-sortDate",
  });

  return (
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
            Hi! I&apos;m Medina, a CS fresh graduate from IPB University.
            I&apos;ve always enjoyed the problem-solving and the craft of
            turning a design into something that actually works and serves
            purpose beyond just being nice to look at. I tend to gravitate
            towards works where aesthetic and function meet, like frontend and
            UI design.
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
      </div>

      <SectionTitle title="Latest Projects"></SectionTitle>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {projects?.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title ?? "N/A"}
              id={project.id}
              year={project.year ?? "N/A"}
              short_desc={project.shortDescription ?? "N/A"}
              tags={
                project.tags?.map((t) => t.tagName ?? "").filter(Boolean) ?? []
              }
              thumbnail_url={
                typeof project.thumbnailImage === "object" &&
                project.thumbnailImage
                  ? (project.thumbnailImage.url ?? "/")
                  : "/"
              }
            ></ProjectCard>
          </li>
        ))}
      </ul>

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
            <span className="font-ssh text-sm font-medium">2025 & 2026</span>
            <h3 className="font-light text-md">
              E-Government IT Architecture Research
            </h3>
            <p className="text-xs">
              I spent a total of 9+ months working as a research assistant for
              e-government IT architecture assessments in Indonesia, following
              the national SPBE (Sistem Pemerintahan Berbasis Elektronik)
              framework. Along with my team members, we evaluated business
              processes, services, data, applications, infrastructure, and
              cybersecurity within a government institution.
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
          {/* <button className="mt-4 group relative  bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120%  w-fit">
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
                    </button> */}
        </div>
        <div className="flex  flex-col md:flex-1 flex-auto w-fit md:max-w-126 xl:max-w-full gap-5 border-1 border-light-border bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-xl hover:scale-102">
          <div className="bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120% p-3 w-fit">
            <FontAwesomeIcon
              icon={faPaintBrush}
              className="text-white text-4xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-ssh text-sm font-medium">2021 - 2023</span>
            <h3 className="font-light text-md">
              Graphic Design Staff in Campus Committees/Organizations
            </h3>
            <p className="text-xs">
              Across several campus organizations and annual event committees, I
              contributed as a graphic design staff. I produced Instagram
              content, posters, banners, vector assets, merchandise stickers,
              and certificates.
            </p>
            {/* <p className="text-xs">
                      This included developing visual identities and content
                      templates from scratch, and working within team design
                      workflows in both Canva and Figma. These experiences were
                      also the first time I used Figma, initially for graphic
                      design, before eventually transitioning into UI design.
                    </p> */}
          </div>
          {/* <button className="mt-4 group relative  bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120%  w-fit">
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
                    </button> */}
        </div>
      </div>
      <SectionTitle title="Contact Me"></SectionTitle>
      <ContactInfo></ContactInfo>
    </div>
  );
}
