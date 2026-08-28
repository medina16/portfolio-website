import { getProject } from "@/app/(frontend)/lib/getProject";
import Tag from "@/app/(frontend)/components/tag";
import Image from "next/image";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@/app/(frontend)/components/modal";

import { getPayload } from "payload";
import config from "@/payload.config";
import ImageSlider from "@/app/(frontend)/components/imageSlider";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
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

export default async function ProjectModal({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);
  // const payload = await getPayload({ config });
  // const project = await payload.findByID({
  //   collection: "projects",
  //   id: id,
  //   depth: 2,
  // });

  return (
    <Modal>
      <div className="flex gap-8 w-full h-fit lg:h-full  flex-col lg:flex-row">
        {/* Kiri */}
        <div className="flex lg:h-full w-full lg:max-w-1/2 flex-col">
          <div>
            <span className="font-ssh font-medium">
              {project.year ?? "N/A"}
            </span>
            <h2 className="font-medium text-2xl/7 pb-2">
              {project.title ?? "N/A"}
            </h2>
            <div className="flex flex-row flex-wrap gap-5">
              {project.links?.map((link) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.id}
                  href={link.linkUrl ?? "?"}
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

          <span className="text-sm mb-2">
            {project.overview && <RichText data={project.overview} />}
          </span>

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

          <span className="flex gap-4 pb-3">
            <Image
              src="/PetalIconSmall.svg"
              alt="Decorative Icon"
              width={16}
              height={16}
            />
            <h3 className="text-lg">My Process</h3>
          </span>

          <div className="text-sm mb-2">
            {project.myProcess && <RichText data={project.myProcess} />}
          </div>
        </div>
      </div>
    </Modal>
  );
}
