import { useReducer, useEffect, useState, useMemo } from 'react';
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

export function useTypingAnimation(node: React.ReactElement, cb?: () => void) {
	const [fps, _] = useState(Math.floor(1000 / 30));
	const animation = useMemo(
		() => typeWriter(node.props.children),
		[node.props.children],
	);
	const [sentence, setSentence] = useState<string>('');
	const [caret, setCaret] = useState<boolean>(true);

	useEffect(() => {
		const interval = setInterval(() => {
			const { value, done } = animation.next();
			if (done) {
				clearInterval(interval);
				setTimeout(() => {
					cb && cb();
					setCaret(prev => !prev);
				}, 500);
				return;
			}
			setSentence(prev => prev + value);
		}, fps);
		return () => clearInterval(interval);
	}, []);

	return { sentence, caret };
}
