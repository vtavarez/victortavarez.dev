import { useReducer, useEffect, useState } from 'react';
import { typeWriter } from '@/lib/utils';
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

export function useTypingAnimation(node: React.ReactElement) {
	const [sentence, setSentence] = useState<string>('');
	const [caret, setCaret] = useState<boolean>(true);

	useEffect(() => {
		const animation = typeWriter(node.props.children);
		const fps = Math.floor(1000 / 30);
		const interval = setInterval(() => {
			const { value, done } = animation.next();
			if (done) {
				clearInterval(interval);
				setTimeout(() => setCaret(prev => !prev), 500);
				return;
			}
			setSentence(prev => prev + value);
		}, fps);
		return () => clearInterval(interval);
	}, []);

	return { sentence, caret };
}
