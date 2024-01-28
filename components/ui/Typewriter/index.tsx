"use client";
import { Children, createElement } from "react";
import { useTypingAnimation } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export const Typewriter = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const [node] = Children.toArray(children) as React.ReactElement[];
  const { sentence, cursor } = useTypingAnimation(node);
  return createElement(
    node.type,
    {
      ...node.props,
      className: cn(node.props.className, cursor ? "blink" : ""),
    },
    sentence,
  );
};
