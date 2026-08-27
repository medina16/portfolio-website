import Image from "next/image";

interface Props {
  text: string;
  img_src: string;
  small?: boolean;
  logo_wide?: boolean;
}

export default function Tag({
  text,
  img_src,
  small = false,
  logo_wide = false,
}: Props) {
    
  const imgWidth = logo_wide ? 35 : 18;
  const imgHeight = 20;

  const imgWidthClass = logo_wide ? "max-h-6 max-w-7" : "max-h-5";

  const sizeClasses = small
    ? "text-[11px] px-2 py-2"
    : "text-xs px-3 py-1.5";

  return (
    <div
      className={`h-full inline-flex items-center gap-2 rounded-lg border border-light-border hover:bg-light-hover hover:border-light-hover-border hover:shadow-none ${sizeClasses}`}
    >
      <div className="flex items-center justify-center shrink-0">
        <Image
          src={img_src}
          alt={text}
          width={imgWidth}
          height={imgHeight}
          className={`object-contain ${imgWidthClass}`}
        />
      </div>
      <span>{text}</span>
    </div>
  );
}