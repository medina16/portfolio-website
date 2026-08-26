import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
              <div className="z-999 w-full shadow-md fixed top-0 bg-white flex items-center justify-center md:justify-between py-3 ">
                <Image
                  src="/PatternMini.svg"
                  alt="Decorative"
                  width={170}
                  height={50}
                  className="hidden md:block"
                />
                <div className=" flex  flex-row ">
                  <nav>
                    <ul className=" items-center flex flex-row gap-7 font-ssh font-light py-3 px-10 text-sm">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/projects">Projects</Link></li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                  <Image
                    src="/PatternMini.svg"
                    alt="Decorative"
                    width={170}
                    height={50}
                    className="hidden md:block"
                  />
                  {/* <Image
                      src="/PatternMini.svg"
                      alt="Decorative"
                      width={110}
                      height={30}
                    /> */}
                </div>
              </div>
    );
}