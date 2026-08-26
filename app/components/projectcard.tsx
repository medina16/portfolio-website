import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div
      className="md:flex-1 flex flex-col shadow-md bg-white w-auto rounded-md border-light-border border-1
    transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
    >
      <div className="rounded-t-xl border-b-1 border-light-border">
        <Image
          src="/ProjectImages/Screenshot 2026-08-14 121207.png"
          alt="Decorative"
          width={310}
          height={180}
          className="object-cover w-full"
        />
      </div>
      <div className="py-4 px-3.5 flex flex-col gap-1">
        <span className="font-ssh font-medium text-xs">2026</span>
        <h3 className="font-light text-md">Personal Portofolio Website</h3>
        <p className="text-xs">
          A responsive portfolio website showcasing all notable projects
          I&apos;ve done during my time as a student in IPB University.
        </p>
        <div className="mt-2 flex flex-row gap-1">
          <span className="text-[10.5px] px-2.5 py-0.5 rounded-lg font-semibold bg-teal">
            Frontend
          </span>
          <span className="text-[10.5px] px-2.5 py-0.5 rounded-lg font-semibold bg-teal">
            UI Design
          </span>
          <span className="text-[10.5px] px-2.5 py-0.5 rounded-lg font-semibold bg-teal">
            Next.js
          </span>
          <span className="text-[10.5px] px-2.5 py-0.5 rounded-lg font-semibold bg-teal">
            Figma
          </span>
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
  );
}
