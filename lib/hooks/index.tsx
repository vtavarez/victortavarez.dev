import React, { useReducer, useEffect, useRef, useState } from 'react';
import { inView } from 'framer-motion';
import type { InputsFocusState } from '@/lib/types';

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
  options: { amount?: number | 'some' | 'all' },
) {
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      inView(
        ref.current,
        entry => {
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
  const initalRender = useRef<boolean>(true);
  const animationFrame = useRef<number>(0);
  const index = useRef<number>(0);
  const previousTime = useRef<number>(performance.now());
  const chars = useRef<string>(node.props.children);

  const [sentence, setSentence] = useState<string>('');
  const [caret, setCaret] = useState<boolean>(false);

  function type(currentTime: number, currentIndex: number): void {
    let delta = currentTime - previousTime.current;
    let fps = 30;

    if (currentIndex < chars.current.length) {
      if (delta >= Math.floor(1000 / fps)) {
        setSentence(prev => prev + chars.current.charAt(currentIndex));
        index.current = currentIndex + 1;
        previousTime.current = currentTime;
      }

      requestAnimationFrame(() => {
        type(performance.now(), index.current);
      });
      return;
    }

    setTimeout(() => setCaret(prev => !prev), 500);
    cancelAnimationFrame(animationFrame.current);
  }

  useEffect(() => {
    if (initalRender.current) {
      initalRender.current = false;

      animationFrame.current = requestAnimationFrame(() => {
        type(performance.now(), index.current);
      });

      setCaret(true);
    }

    () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return { sentence, caret };
}
