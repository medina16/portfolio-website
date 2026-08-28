// export const revalidate = 3600;

import { getProject } from "../../lib/getProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Tag from "../../components/tag";
import Link from "next/link";
import SectionTitle from "../../components/sectiontitle";
import ContactInfo from "../../components/contact";

import { RichText } from "@payloadcms/richtext-lexical/react";

import { getPayload } from "payload";
import config from "@/payload.config";
import ImageSlider from "../../components/imageSlider";
import { Media } from "@/payload-types";

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 1000,
  });

  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export const revalidate = 3600;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Projects({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);

  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const project = await response.json();

  // console.log(project);

  return (
    <div className="max-w-5xl 2xl:max-w-7xl flex-col items-left justify-center flex gap-6 p-3 pb-10 pt-7  flex-auto w-full">
      <Link href="/projects">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3"></FontAwesomeIcon>
        Back to Projects
      </Link>
      <div className=" w-full h-fit bg-white text-dark flex sm:flex-row flex-col items-center justify-center gap-10 border-1 border-light-border bg-white rounded-xl shadow-md p-6 md:p-8 size-auto">
        <div className="flex flex-col gap-8 h-full w-full">
          {/* Kiri */}
          <div className="flex flex-col">
            <div>
              <span className="font-ssh font-medium">
                {project.year ?? "N/A"}
              </span>
              <h2
                className="pb-3"
                style={{ lineHeight: "100%", fontWeight: "600"}}
              >
                {project.title ?? "N/A"}
              </h2>
              <div className="flex flex-row flex-wrap gap-5">
                {project.links?.map((link) => (
                  <Link
                    key={link.id}
                    href={link.linkUrl ?? "?"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ssh font-regular"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-light-purple mr-2"
                    ></FontAwesomeIcon>
                    {link.linkName}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 w-full">
              <ImageSlider
                images={
                  project.sliderImages
                    ?.map((s) => s.image)
                    .filter(
                      (img): img is Media =>
                        typeof img === "object" && img !== null,
                    ) ?? []
                }
              />
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <h4 className="font-medium">Techs & Tools</h4>
              <div className="flex flex-row flex-wrap gap-1.5">
                {project.techsAndTools?.map((tech) => {
                  if (typeof tech === "number") return null;
                  return (
                    <div key={tech.id}>
                      <Tag
                      small
                        text={tech.name ?? "N/A"}
                        img_src={
                          typeof tech.logoImage === "object" && tech.logoImage
                            ? (tech.logoImage.url ?? "/")
                            : "/"
                        }
                        logo_wide={tech.logoWide ?? false}
                      ></Tag>
                    </div>
                  );
                })}
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

            <div className="text-sm mb-2">
              {project.overview && <RichText data={project.overview} />}
            </div>

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

            <div className="text-sm mb-2 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
              {project.keyFeatures && <RichText data={project.keyFeatures} />}
            </div>

            <hr className="my-3 text-light-border"></hr>

            <div className="flex gap-4 pb-3">
              <Image
                src="/PetalIconSmall.svg"
                alt="Decorative Icon"
                width={16}
                height={16}
              />
              <h3 className="text-lg">My Process</h3>
            </div>

            <div className="text-sm mb-2">
              {project.myProcess && <RichText data={project.myProcess} />}
            </div>
          </div>
        </div>
      </div>

      <SectionTitle title="Contact Me"></SectionTitle>
      <ContactInfo></ContactInfo>
    </div>
  );
}
