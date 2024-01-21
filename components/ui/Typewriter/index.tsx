"use client";
import { useState, useEffect, useRef } from "react";

export const Typewriter = ({
  container,
  children,
  once,
  ...props
}: {
  container: React.RefObject<HTMLDivElement>;
  children: string;
  once?: boolean;
}) => {
  const initialRender = useRef(true);
  const [sentence, setSentence] = useState("");
  const [blink, setBlink] = useState(false);

  function typeSentence() {
    const chars = children.split("");
    for (let i = 0; i < chars.length; i++) {
      setTimeout(() => {
        setSentence((prev) => prev + chars[i]);
      }, i * 50);
    }

    setBlink(true);

    setTimeout(
      () => {
        setBlink((prev) => !prev);
      },
      chars.length * 50 + 500,
    );
  }

  useEffect(() => {
    if (initialRender.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
              typeSentence();
              if (once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.8 },
      );

      if (container.current) observer.observe(container.current);
      return () => observer.disconnect();
    }
    initialRender.current = false;
  }, []);

  return <span className={blink ? "blink" : ""}>{sentence}</span>;
};
