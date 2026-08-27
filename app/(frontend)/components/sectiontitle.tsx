import Image from "next/image";

export default function SectionTitle({title}: {title: string}){
    return(
        <div className="flex flex-row items-center gap-5 w-full">
                    <Image
                      src="/GlintIcon.svg"
                      alt="Decorative Icon"
                      width={63}
                      height={63}
                    />
                    <h2 className="flex-none">{title}</h2>
                    <hr className="w-full border-2 border-light-purple" />
                  </div>
    );
}