import Image from "next/image";
import Link from "next/link";
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
    normal: ({ children }) => <p className="mb-6">{children}</p>,
    h2: ({ children }) => (
      <h2 className="my-6 text-xl font-bold xl:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-6 text-2xl font-bold">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mx-auto my-8 border-l-4 border-primary pl-4 xl:max-w-[90%]">
        {children}
      </blockquote>
    ),
  },
  types: {
    code: ({
      value: { filename, code, language },
    }: {
      value: { filename: string; code: string; language: string };
    }) => {
      return (
        <div className="my-10">
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
      <code className="inline-block bg-primary  px-[3px] py-[2px] text-xs leading-none text-background xl:text-sm">
        {text}
      </code>
    ),
    link: ({ value, children }) => {
      return (
        <a
          className="font-medium text-primary underline"
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};
