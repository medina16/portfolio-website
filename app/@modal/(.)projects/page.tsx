"use client";

import Tag from "@/app/components/tag";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      className=" m-auto w-full h-full md:w-5/6 md:h-5/6 bg-white text-dark 
      flex flex-col gap-10 border-1 
      border-light-border bg-white rounded-xl shadow-md p-8 fixed inset-0 size-auto
      "
    >
      <button
        className="absolute top-2 right-4 border-none"
        onClick={() => dialogRef.current?.close()}
      >
        <span className="text-2xl">&times;</span>
      </button>
      <div className="flex gap-8 h-fit lg:h-full  flex-col lg:flex-row">
        {/* Kiri */}
        <div className="flex lg:h-full lg:max-w-1/2 flex-col">
          <div>
            <span className="font-ssh font-medium">2025 - 2026</span>
            <h2 className="font-medium text-2xl/7 pb-2">Toll Road Asset Dashboard</h2>
            <div>
              <span className="font-ssh font-regular"><FontAwesomeIcon icon={faUpRightFromSquare} className="text-light-purple mr-2">
                </FontAwesomeIcon>Demo Video</span>
            </div>
          </div>
          <div className="mt-4 bg-black aspect-4/2 object-cover w-full rounded-lg">

          </div>
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
        {/* Kanan */}
        <div className="h-full lg:w-1/2 flex-col overflow-y-hidden lg:overflow-y-auto">
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
            For my undergrad thesis (skripsi), I designed and built a dashboard
            prototype integrated into an existing Road Asset Management System
            (RAMS), which has been previously developed by multiple people
            before me.
          </p>

          <p className="text-sm mb-2">
            This dashboard is meant to take in sheets and sheets of
            structurally complex data from road ledger (leger jalan) physical
            documents, and turn it into digestible visualizations, helping
            stakeholders (especially Toll Road Business Entities/Badan Usaha
            Jalan Tol) track and understand better toll road asset condition
            over time.
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
              The data is organized by toll road and year, since road ledger
              data of a toll road is expected to be updated at least every 5
              years to track changes.
            </li>
            <li>
              Four levels of granularity from page to page: toll road list →
              ledger version overview → mainroad summary → mainroad segment
              detail.{" "}
            </li>
            <li>
              Mainroad data summary consists of mixed visualizations, such as
              cards, tables, and graphic, customized to characteristics of each
              data category.
            </li>
            <li>
              Mainroad segment detail has an edit mode interface to manually
              correct or adjust data field values on the segment, since the data
              is auto-generated from GeoJSON files via a separate feature.
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
            direction and occasional pointers on what to avoid, rather than
            specific answers. And on top of that, I had no direct access to
            stakeholders. So I started by doing my own research, going through
            toll road ledger samples, government regulations, and official
            guidelines to understand the data and the people who&apos;d be using it.
            From there, I studied the existing system&apos;s codebase and database to
            figure out how to build on top of it without disrupting what was
            already working. I also had to work out everything else myself, from
            page flows, wireframing, visualization choices, API endpoints,
            database adjustments, to frontend-backend implementation.
          </p>
          <p className="text-sm mb-2">
            This
            project taught me the hard way how to work within the boundaries of
            an existing system, compared to earlier projects where I had way
            more room for flexibility. At the same time, having no user input
            and a fairly niche subject pushed me to be more self-directed with
            design decisions. I came out of it with a much stronger instinct for
            working within constraints and making decisions with incomplete
            information.
          </p>
        </div>
      </div>
    </dialog>
  );
}
