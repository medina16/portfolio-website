import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Stack_Sans_Headline,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../(frontend)/components/navbar";
import Image from "next/image";

config.autoAddCss = false;

const pjs = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const ssh = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
});

const sgeo = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic-expanded-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medina Fitri Maulida | Web Dev & UI Design",
  description: ".",
};

export default function RootLayout({ children, modal }: {children: React.ReactNode, modal: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${pjs.variable} ${ssh.variable} ${sgeo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-pjs">
        <Navbar></Navbar>
        <div className="flex justify-center">
              <div className="flex flex-col flex-1 items-center justify-center w-full">
                <main className="flex flex-1 w-full flex-col items-center ">
                  <div className="relative flex flex-col items-center justify-center  bg-radial from-light-purple from-25% to-light-blue pt-28 pb-15 w-full overflow-hidden">
                    <Image
                      src="/Swirl.svg"
                      alt="Decorative"
                      width={650}
                      height={100}
                      className="z-0 absolute -top-10 -right-30 xl:-top-10 xl:-right-10 w-120 xl:w-[650px] opacity-70"
                    />
                    <Image
                      src="/Swirl.svg"
                      alt="Decorative"
                      width={650}
                      height={200}
                      className="z-0 absolute -bottom-40 -left-20 w-130 xl:w-[650px] rotate-180 opacity-70"
                    />
        
                    <div className="flex transition duration-300 ease-in-out hover:scale-110 z-20">
                      <Image
                        src="/PetalSignature.svg"
                        alt="Decorative"
                        width={150}
                        height={150}
                        className="w-23 md:w-40"
                      />
                      <h1 className="text-white z-10 flex justify-center flex-col flex-none">
                        <span className="inline-block  text-5xl/7 md:text-7xl ">
                          Medina
                        </span>
                        <span className="ml-6 md:ml-10 text-3xl md:text-5xl">
                          Fitri Maulida
                        </span>
                      </h1>
                    </div>
                    <div className="relative left-6 md:left-10 flex flex-row gap-3">
                      <div className="font-ssh font-light border-2 border-white rounded-xl px-7 md:px-15 py-0.5 text-white">
                        Web Dev
                      </div>
                      <div className="font-ssh font-light border-2 border-white rounded-xl px-7 md:px-15 py-0.5 text-white">
                        UI Design
                      </div>
                    </div>
                  </div>
        
                  <div className="flex w-full justify-center xl:justify-between gap-20 ">
                    <div className="p-1 2xl:max-w-55 w-full max-w-45 hidden xl:block">
                      <div className="bg-[url('/Patterns.svg')] z-[-999] bg-contain 2xl:bg-cover bg-repeat-y h-full w-auto"></div>
                    </div>
                    
                    {children}
        
                    <div className="p-1 2xl:max-w-55 w-full max-w-45 hidden xl:block">
                      <div className="bg-[url('/Patterns.svg')] z-[-999] bg-contain 2xl:bg-cover bg-repeat-y h-full w-auto"></div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
 
        {modal}
      </body>
    </html>
  );
}
