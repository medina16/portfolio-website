import Image from "next/image";

interface Props {
  text: string;
  img_src: string;
}

export default function Button({
  text,
  img_src,
}: Props) {

  return (
    <div
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
    </div>
  );
}

