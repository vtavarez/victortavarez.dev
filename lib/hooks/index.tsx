import { useReducer, useSyncExternalStore, useRef } from "react";
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

export function useObserverReady(fn: () => void, strictMode: boolean = true) {
  const initialRender = useRef(true);
  return useSyncExternalStore(
    (callback: () => void) => {
      window.addEventListener("load", callback);
      return () => window.removeEventListener("load", () => null);
    },
    () => {
      if (strictMode && initialRender.current) {
        fn();
        initialRender.current = false;
        return;
      }

      if (!strictMode) fn();
    },
    () => null,
  );
}
