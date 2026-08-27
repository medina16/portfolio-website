import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import SectionTitle from "../components/sectiontitle";
import ProjectCard from "../components/projectcard";
import Button from "../components/button";
import Link from "next/link";

import { getPayload } from "payload";
import config from "@/payload.config";
import ContactInfo from "../components/contact";

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {

  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1
  const payload = await getPayload({ config });
  const {
    docs: projects,
    // totalPages,
    // hasNextPage,
    // hasPrevPage,
  } = await payload.find({
    collection: "projects",
    limit: 6,
    page: currentPage,
    sort: "-sortDate",
  });

  return (
    <div className="max-w-5xl 2xl:max-w-7xl flex-col items-left justify-center flex gap-6 pb-10 px-3 pt-7  flex-auto">
          <SectionTitle title="My Projects"></SectionTitle>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {projects.map((project) => (
              <li key={project.id}>
                
                  <ProjectCard
                    title={project.title}
                    id={project.id}
                    year={project.year}
                    short_desc={project.shortDescription}
                    tags={project.tags?.map((t) => t.tagName) ?? []}
                    thumbnail_url={
                      project.thumbnailImage &&
                      typeof project.thumbnailImage === "object"
                        ? project.thumbnailImage.url
                        : "/"
                    }
                  ></ProjectCard>
                
              </li>
            ))}
          </ul>

          {/* <div className="flex gap-4 justify-center mt-6">
        {hasPrevPage && (
          <Link href={`/projects?page=${currentPage - 1}`}>← Previous</Link>
        )}
        <span>Page {currentPage} of {totalPages}</span>
        {hasNextPage && (
          <Link href={`/projects?page=${currentPage + 1}`}>Next →</Link>
        )}
      </div> */}

          <SectionTitle title="Contact Me"></SectionTitle>
          <ContactInfo></ContactInfo>
        </div>
  );
}
