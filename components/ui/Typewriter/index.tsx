'use client';
import { Children, createElement } from 'react';
import { useTypingAnimation } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { on } from 'events';

export function Typewriter({
	children,
	onFinished,
	...props
}: {
	children: React.ReactNode;
	onFinished?: () => void;
}) {
	const [node] = Children.toArray(children) as React.ReactElement[];
	const { sentence, caret } = useTypingAnimation(node, onFinished);

	return createElement(
		node.type,
		{
			...node.props,
			className: cn(node.props.className, caret ? 'caret' : ''),
		},
		sentence,
	);
}
