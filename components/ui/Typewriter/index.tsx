"use client";
import { useState, useEffect, useRef, Children, createElement } from "react";
import { cn } from "@/lib/utils";

export const Typewriter = ({
  containerRef,
  children,
  once,
  ...props
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  once?: boolean;
}) => {
  const initialRender = useRef(true);
  const [sentence, setSentence] = useState("");
  const [blink, setBlink] = useState(false);

  const [node] = Children.toArray(children) as React.ReactElement[];

  function typeSentence() {
    const chars = node.props.children.split("");
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
      if (containerRef.current) observer.observe(containerRef.current);
      initialRender.current = false;
    }
  }, []);

  return createElement(
    node.type,
    {
      ...node.props,
      className: cn(node.props.className, blink ? "blink" : ""),
    },
    sentence,
  );
};
