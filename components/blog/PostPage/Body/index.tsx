import Image from "next/image";
import Refractor from "react-refractor";
import { PortableText } from "@portabletext/react";
import { type TypedObject } from "sanity";
import tsx from "refractor/lang/tsx";
import "@/styles/refractor.css";

export function Body({ value }: { value: TypedObject[] }) {
  const components = {
    types: {
      code: ({
        value,
      }: {
        value: { filename: string; code: string; language: string };
      }) => {
        Refractor.registerLanguage(tsx);
        return (
          <Refractor
            className="refractor my-3"
            language={value.language}
            value={value.code}
            inline={false}
          />
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

  return (
    <>
      <PortableText
        value={value}
        components={components}
      />
    </>
  );
}
