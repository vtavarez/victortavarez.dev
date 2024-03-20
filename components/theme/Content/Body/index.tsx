'use client';
import { PortableText } from '@portabletext/react';
import { Components } from './Components';
import { type TypedObject } from 'sanity';

export function Body({ value }: { value: TypedObject[] }) {
	// Supress defaultProps warnings
	const error = console.error;
	console.error = (...args: any) => {
		if (/defaultProps/.test(args[0])) return;
		error(...args);
	};

	return (
		<>
			<PortableText
				value={value}
				components={Components}
			/>
		</>
	);
}
