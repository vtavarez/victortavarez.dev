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
        value: { filename, code, language },
      }: {
        value: { filename: string; code: string; language: string };
      }) => {
        Refractor.registerLanguage(tsx);
        return (
          <div className="my-3">
            {filename && (
              <div className="mt-2 h-fit w-full bg-primary p-4 text-sm font-medium text-background">
                {filename}
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
