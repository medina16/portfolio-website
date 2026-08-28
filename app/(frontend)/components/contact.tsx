import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactInfo(){
    return(
        <div
                className="relative w-full px-10 py-10 md:px-15 md:py-20 bg-radial rounded-3xl
          from-light-purple from-20% to-[#C5EDF7] to-100% p-3 shadow-md p-8
          transition duration-300 hover:shadow-xl hover:scale-102 overflow-hidden
          flex-initial" id="contact"
              >
                <Image
                  src="/Swirl.svg"
                  alt="Decorative"
                  width={800}
                  height={100}
                  className="z-0 absolute w-800 top-0 -right-30 md:top-0 md:right-[-50] md:w-180 opacity-70"
                />
                <div className="flex flex-col gap-5 md:gap-8 ">
                  <span className="font-ssh text-white text-5xl md:text-6xl font-bold z-100">
                    Let&apos;s Connect!
                  </span>
                  <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <Link href="mailto:medina.fm.167@gmail.com" 
                     className={` z-100 shadow-sm bg-white py-2 px-5 inline-flex items-center gap-3 rounded-xl hover:bg-light-hover  hover:shadow-none w-full md:w-auto justify-center`}
>
                      <div className="flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-light-purple"
                        />
                      </div>
                      <span className="text-lg md:text-sm">Email</span>
                    </Link>
                    <Button
                      text="LinkedIn"
                      img_src="/Logos/LinkedIn.png"
                      link="https://www.linkedin.com/in/medina-fitri-m/"
                    ></Button>
                  </div>
                </div>
              </div>
    )
}