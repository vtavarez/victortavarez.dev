import { useReducer, useSyncExternalStore, useEffect, useRef } from "react";
import type { InputsFocusState } from "@/lib/types";
import { ZodVoidDef } from "zod";

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

export function useObserverReady(fn: () => void) {
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      fn();
      initialRender.current = false;
      return;
    }

    return () => {
      initialRender.current = true;
    };
  }, []);
}
