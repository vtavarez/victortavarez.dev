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

export function useIntersectionObserver(
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
  const state = useRef({
    initalRender: true,
    animationFrame: 0,
    fps: 30,
    index: 0,
    previousTime: performance.now(),
    chars: node.props.children,
  });

  const [sentence, setSentence] = useState<string>('');
  const [caret, setCaret] = useState<boolean>(false);

  function type(currentTime: number, currentIndex: number): void {
    let delta = currentTime - state.current.previousTime;

    if (currentIndex < state.current.chars.length) {
      if (delta >= Math.floor(1000 / state.current.fps)) {
        state.current.index = currentIndex + 1;
        state.current.previousTime = currentTime;
        setSentence(prev => prev + state.current.chars.charAt(currentIndex));
      }
      requestAnimationFrame(() => type(performance.now(), state.current.index));
      return;
    }

    setTimeout(() => setCaret(prev => !prev), 500);
    cancelAnimationFrame(state.current.animationFrame);
  }

  useEffect(() => {
    if (state.current.initalRender) {
      state.current.initalRender = false;

      state.current.animationFrame = requestAnimationFrame(() => {
        type(performance.now(), state.current.index);
      });

      setCaret(true);
    }
    () => cancelAnimationFrame(state.current.animationFrame);
  }, []);

  return { sentence, caret };
}
