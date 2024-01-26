"use client";
import { useState, Children, createElement, useRef } from "react";
import { useObserverReady } from "@/lib/hooks";
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
  const [sentence, setSentence] = useState("");
  const [blink, setBlink] = useState(false);
  const [node] = Children.toArray(children) as React.ReactElement[];

  function typeContent() {
    const chars = node.props.children.split("");
    for (let i = 0; i < chars.length; i++) {
      setTimeout(() => {
        setSentence((prev) => prev + chars[i]);
      }, i * 50);
    }
    setBlink(true);
    setTimeout(() => setBlink((prev) => !prev), chars.length * 50 + 500);
  }

  useObserverReady(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeContent();
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.8 },
    );
    containerRef.current && observer.observe(containerRef.current);
  });

  return createElement(
    node.type,
    {
      ...node.props,
      className: cn(node.props.className, blink ? "blink" : ""),
    },
    sentence,
  );
};
