import React, { useReducer, useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";
import type { InputsFocusState } from "@/lib/types";

export const useFocusedFields = (fields: InputsFocusState) => {
  const inputFocusReducer = (
    state: InputsFocusState,
    input: HTMLInputElement | HTMLTextAreaElement,
  ) => {
    const { name } = input;
    return {
      ...state,
      [name]: !state[name],
    };
  };

  const [focusedFields, setFocusedFields] = useReducer(
    inputFocusReducer,
    fields,
  );

  return { focusedFields, setFocusedFields };
};

export function useObserver(
  fn: () => void,
  ref: any,
  options: { amount?: number | "some" | "all" },
) {
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      inView(
        ref.current,
        (entry) => {
          if (entry.isIntersecting) {
            fn();
          }
        },
        options,
      );
      initialRender.current = false;
    }
  }, []);
}

export function useTypingAnimation(node: React.ReactElement) {
  const initalRender = useRef(true);
  const [sentence, setSentence] = useState("");
  const [cursor, setCursor] = useState(false);

  function type() {
    const chars = node.props.children.split("");
    for (let i = 0; i < chars.length; i++) {
      setTimeout(() => {
        setSentence((prev) => prev + chars[i]);
      }, i * 50);
    }
    setCursor(true);
    setTimeout(() => setCursor((prev) => !prev), chars.length * 50 + 500);
  }

  useEffect(() => {
    if (initalRender.current) {
      type();
      initalRender.current = false;
    }
  }, []);

  return { sentence, cursor };
}
