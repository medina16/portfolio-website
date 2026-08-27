import Image from "next/image";
import Link from "next/link";

interface Props {
  text: string;
  img_src: string;
  link: string;
}

export default function Button({
  text,
  img_src,
  link = "#"
}: Props) {

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer"
      className={` z-100 shadow-sm bg-white py-2 px-5 inline-flex items-center gap-3 rounded-xl hover:bg-light-hover  hover:shadow-none`}
    >
      <div className="flex items-center justify-center shrink-0">
        <Image
          src={img_src}
          alt={text}
          width={16}
          height={16}
          className="object-contain opacity-80"
        />
      </div>
      <span className="text-sm">{text}</span>
    </Link>
  );
}

