import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Stack_Sans_Headline,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./components/navbar";
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
  title: "Medina FM Portfolio",
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
        {children}
        {modal}
      </body>
    </html>
  );
}
