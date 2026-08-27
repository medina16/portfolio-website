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

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectModal({ params }: Props) {
  const { id } = await params;
  const payload = await getPayload({ config });
  const project = await payload.findByID({
    collection: "projects",
    id: id,
    depth: 2,
  });

  return (
    <Modal>
      <div className="flex gap-8 w-full h-fit lg:h-full  flex-col lg:flex-row">
        {/* Kiri */}
        <div className="flex lg:h-full w-full lg:max-w-1/2 flex-col">
          <div>
            <span className="font-ssh font-medium">{project.year}</span>
            <h2 className="font-medium text-2xl/7 pb-2">{project.title}</h2>
            <div className="flex flex-row flex-wrap gap-5">
                {project.links.map((link) => (
                  <Link
                  target="_blank" rel="noopener noreferrer"
                    key={link.id}
                    href={link.linkUrl}
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
                        <ImageSlider images={project.sliderImages}></ImageSlider>
                      </div>
          <div className="mt-4 flex flex-col gap-1">
            <h4 className="font-medium">Techs & Tools</h4>
            <div className="flex flex-row flex-wrap gap-1.5">
              {project.techsAndTools?.map((tech) => {
                                // if (typeof tech === 'string') return null;
                                return (
                                  <div key={tech.id}>
                                    <Tag
                                      text={tech.name}
                                      img_src={tech.logoImage.url}
                                      logo_wide={tech.logoWide}
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
                        <RichText data={project.overview} />
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
                        <RichText data={project.keyFeatures} />
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
              <RichText data={project.myProcess} />
            </div>
        </div>
      </div>
    </Modal>
  );
}
