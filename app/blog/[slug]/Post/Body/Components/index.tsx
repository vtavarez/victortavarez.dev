import Image from "next/image";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import tsx from "refractor/lang/tsx";
import jsx from "refractor/lang/jsx";
import { PortableTextComponents } from "@portabletext/react";
import "@/styles/refractor.css";

Refractor.registerLanguage(js);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(jsx);

export const Components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="my-6 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-5 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-4 text-2xl font-bold">{children}</h3>
    ),
  },
  types: {
    code: ({
      value: { filename, code, language },
    }: {
      value: { filename: string; code: string; language: string };
    }) => {
      return (
        <div className="my-3">
          {filename && (
            <div className="mt-2 flex h-fit w-full flex-row items-center justify-between bg-primary p-4 text-sm font-medium text-background">
              <span>{filename}</span>
              <span className="capitalize">{language}</span>
            </div>
          )}
          <Refractor
            className="refractor mb-2"
            language={language}
            value={code}
            inline={false}
          />
        </div>
      );
    },
    image: ({
      value: { alt, asset },
    }: {
      value: { alt: string; asset: { url: string } };
    }) => {
      return (
        <div className="relative mx-auto aspect-video w-full xl:w-[600px]">
          <Image
            className="absolute aspect-video h-full w-full object-cover"
            src={asset.url}
            layout="fill"
            alt={alt}
            priority
          />
        </div>
      );
    },
  },
  marks: {
    code: ({ text }: { text: string }) => (
      <code className="inline-block bg-primary px-[3px] py-[2px] text-sm leading-none text-background">
        {text}
      </code>
    ),
  },
};
