import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  year: string;
  title: string;
  short_desc: string;
  tags: Array<string>;
  id: string;
  thumbnail_url: string;
}

export default function ProjectCard({
  year = "N/A",
  title = "N/A",
  short_desc = "null",
  tags = ["none", "none2"],
  thumbnail_url = "/",
  id
}: Props) {
  return (
    <div
      className="md:flex-1 w-full h-full flex flex-col shadow-md bg-white rounded-md border-light-border border-1
    transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
    >
      <div className="rounded-t-xl border-b-1 border-light-border h-45">
        <Image
          src={thumbnail_url}
          alt="Thumbnail"
          width={310}
          height={180}
          className="object-cover min-h-full h-auto max-h-full w-full"
        />
      </div>
      <div className="py-4 px-3.5 flex flex-col gap-1">
        <span className="font-ssh font-medium text-xs">{year}</span>
        <h3 className="font-light text-md" style={{ lineHeight: "100%" }}>{title}</h3>
        <p className="text-xs hidden md:block">{short_desc}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-1">
          {tags.map((item, index) => (
            <span
              key={index}
              className="text-[10.5px] px-2.5 py-0.5 rounded-lg font-semibold bg-teal"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="mt-4 group relative  bg-radial rounded-lg from-[#E196EB] from-0% to-[#C5EDF7] to-120%  w-fit">
          <Link href={"/projects/" + id}>
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
